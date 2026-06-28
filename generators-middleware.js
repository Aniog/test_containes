import fs from 'fs'
import path_mod from 'path'
import { fileURLToPath } from 'url'

const __dirname = path_mod.dirname(fileURLToPath(import.meta.url))

export default function generatorsMiddleware() {
  return {
    name: 'generators-hub',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url || '';
        // Match /generators or /generators/ but not /generators/something
        const match = urlPath.match(/^\/generators(?:\/)?$/);
        if (match) {
          const filePath = path_mod.resolve(__dirname, 'public', 'generators', 'index.html');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            const content = fs.readFileSync(filePath, 'utf-8');
            res.statusCode = 200;
            res.end(content);
            return;
          }
        }
        next();
      });
    }
  }
}
