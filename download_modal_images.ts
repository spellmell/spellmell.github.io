import fs from "fs";
import path from "path";
import https from "https";

const images = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    filename: "graphic_design_3d.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    filename: "game_assets.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop",
    filename: "web_dev.jpg"
  }
];

async function downloadImage(url: string, filename: string) {
  const outputPath = path.join(process.cwd(), 'public', 'img', filename);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          const fileStream = fs.createWriteStream(outputPath);
          res2.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log('Downloaded', filename);
            resolve(true);
          });
        }).on('error', reject);
      } else {
        const fileStream = fs.createWriteStream(outputPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log('Downloaded', filename);
          resolve(true);
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const img of images) {
    await downloadImage(img.url, img.filename);
  }
}

main();
