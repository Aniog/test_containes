import crypto from 'node:crypto';
import path from 'node:path';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';

const traverse = traverseModule.default || traverseModule;
const generate = generateModule.default || generateModule;

const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx']);

function isHostElementName(name) {
  return t.isJSXIdentifier(name) && /^[a-z]/.test(name.name);
}

function hasAttribute(openingElement, attributeName) {
  return openingElement.attributes.some(
    (attribute) =>
      t.isJSXAttribute(attribute) &&
      t.isJSXIdentifier(attribute.name) &&
      attribute.name.name === attributeName,
  );
}

function stringAttribute(name, value) {
  return t.jsxAttribute(t.jsxIdentifier(name), t.stringLiteral(value));
}

function sourceHash(value) {
  return crypto.createHash('sha1').update(value).digest('hex').slice(0, 8);
}

export default function visualEditPlugin() {
  let root = '';
  let enabled = true;

  return {
    name: 'strikingly-visual-edit-tagger',
    enforce: 'pre',
    configResolved(config) {
      root = config.root;
      enabled = config.command === 'serve';
    },
    transform(code, id) {
      if (!enabled) {
        return null;
      }

      const [filePath] = id.split('?');
      const extension = path.extname(filePath);

      if (!SOURCE_EXTENSIONS.has(extension) || !filePath.includes('/src/')) {
        return null;
      }

      let ast;
      try {
        ast = parse(code, {
          sourceType: 'module',
          plugins: ['jsx', 'typescript'],
          sourceFilename: filePath,
        });
      } catch {
        return null;
      }

      let changed = false;
      const relativePath = path
        .relative(root, filePath)
        .replaceAll(path.sep, '/');

      traverse(ast, {
        JSXOpeningElement(nodePath) {
          const { node } = nodePath;
          if (!isHostElementName(node.name) || !node.loc) {
            return;
          }

          if (hasAttribute(node, 'data-source-location')) {
            return;
          }

          const line = node.loc.start.line;
          const column = node.loc.start.column + 1;
          const tagName = node.name.name;
          const location = `${relativePath}:${line}:${column}`;
          const visualId = `${location}:${tagName}:${sourceHash(location)}`;

          node.attributes.unshift(
            stringAttribute('data-source-location', location),
            stringAttribute('data-visual-id', visualId),
            stringAttribute('data-source-file', relativePath),
            stringAttribute('data-source-line', String(line)),
            stringAttribute('data-source-column', String(column)),
          );
          changed = true;
        },
      });

      if (!changed) {
        return null;
      }

      const result = generate(
        ast,
        {
          retainLines: true,
          decoratorsBeforeExport: true,
        },
        code,
      );

      return {
        code: result.code,
        map: result.map || null,
      };
    },
  };
}
