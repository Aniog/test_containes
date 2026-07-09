import fs from 'fs';
import path from 'path';

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const target = "src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}";
      const repl = 'src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E"';
      if (content.includes(target)) {
        content = content.replaceAll(target, repl);
        fs.writeFileSync(fullPath, content);
        console.log("Updated", fullPath);
      }
      
      const target2 = 'src={`data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E`}';
      if (content.includes(target2)) {
        content = content.replaceAll(target2, repl);
        fs.writeFileSync(fullPath, content);
         console.log("Updated", fullPath);
      }
    }
  }
}

walk('src');
