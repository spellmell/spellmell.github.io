import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Backgrounds
content = content.replace(/bg-white/g, 'bg-white/5');
content = content.replace(/bg-slate-50/g, 'bg-transparent');
content = content.replace(/bg-brand-50\/30/g, 'bg-transparent');
content = content.replace(/bg-brand-50\/50/g, 'bg-brand-500/10');
content = content.replace(/bg-slate-100/g, 'bg-white/10');
content = content.replace(/bg-slate-200/g, 'bg-white/20');

// Text colors
content = content.replace(/text-slate-900/g, 'text-white');
content = content.replace(/text-slate-800/g, 'text-slate-200');
content = content.replace(/text-slate-600/g, 'text-slate-300');
content = content.replace(/text-slate-500/g, 'text-slate-400');

// Borders
content = content.replace(/border-slate-100/g, 'border-white/10');
content = content.replace(/border-slate-200/g, 'border-white/20');

// Fix some specific cases that might be broken
// like `bg-white/5/80` if it was `bg-white/80`
content = content.replace(/bg-white\/5\/80/g, 'bg-white/10');
content = content.replace(/bg-white\/5\/20/g, 'bg-white/5');
content = content.replace(/bg-white\/5\/10/g, 'bg-white/5');

// The glass class in App.tsx might have been affected
content = content.replace(/bg-white\/5 border-t/g, 'bg-[#001100]/90 border-t');

// Fix the input fields in contact form
content = content.replace(/bg-white\/5\/10/g, 'bg-white/10');

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced colors in App.tsx');
