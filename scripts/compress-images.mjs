import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = 'public/images', out = 'public/images/optimized';
fs.mkdirSync(`${out}/thumbs`, { recursive: true });

for (const f of fs.readdirSync(src)) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const name = path.parse(f).name;
  const img = () => sharp(path.join(src, f)).rotate();
  await img().resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${out}/${name}.webp`);
  await img().resize({ width: 800, withoutEnlargement: true }).webp({ quality: 75 }).toFile(`${out}/thumbs/${name}.webp`);
  console.log('compressed', f);
}