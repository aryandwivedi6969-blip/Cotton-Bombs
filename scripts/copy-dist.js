const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');
const rootDist = path.join(__dirname, '..', 'dist');

console.log(`Copying ${frontendDist} to ${rootDist}...`);
copyDir(frontendDist, rootDist);
console.log('Dist directory copied successfully!');
