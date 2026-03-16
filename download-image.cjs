const fs = require('fs');
const https = require('https');
const path = require('path');

const url = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1024&h=576&fit=crop";
const dest = path.join(__dirname, 'public', 'img', 'imagen_home_2.png');

// Ensure directory exists
const dir = path.dirname(dest);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to get image: ${res.statusCode}`);
    process.exit(1);
  }
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Image downloaded successfully to ' + dest);
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error downloading image:', err.message);
  process.exit(1);
});
