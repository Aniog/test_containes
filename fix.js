import { execSync } from 'child_process';
import fs from 'fs';

console.log('Running robust fix...');
try {
  if (fs.existsSync('package-lock.json')) fs.unlinkSync('package-lock.json');
  if (fs.existsSync('node_modules')) fs.rmSync('node_modules', { recursive: true, force: true });
  execSync('npm install', { stdio: 'inherit' });
  console.log('Done repairing node_modules!');
} catch (e) {
  console.error(e);
}
