const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(process.cwd(), "src/photos");
const outputDir = path.join(process.cwd(), "src/photos/thumbnails");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = fs.readdirSync(inputDir);

for (const file of files.filter(file => file.endsWith(".jpg"))) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize({ width: 600 })
    .jpeg({ quality: 70, mozjpeg: true })
    .toFile(outputPath)
    .then(() => console.log(`Thumbnail created: ${file}`))
    .catch(err => console.error(err));
}
