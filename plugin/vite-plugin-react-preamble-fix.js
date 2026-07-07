// Synchronous React Refresh preamble injector.
//
// Why this exists:
//   @vitejs/plugin-react v4 injects its preamble into index.html as
//   `<script type="module">` containing an ES `import` statement. That
//   preamble only finishes running AFTER its own module fetch resolves,
//   which can race with the user's main module (`/src/main.jsx`). When
//   the main module imports a component file, the React plugin's
//   per-module transform runs `if (!window.$RefreshReg$) throw` BEFORE
//   the preamble's import has finished, causing the visible "can't
//   detect preamble" runtime error and a blank page.
//
// Fix:
//   Inject a *synchronous* (non-module) preamble into the HTML, right
//   before the main module script. The script re-implements the
//   runtime refresh hook using the `globalThis` injection path that
//   the @react-refresh runtime also exposes. The plugin's own
//   `<script type="module">` preamble is then removed so it does not
//   race with this synchronous one.

const RUNTIME_PATH = '/@react-refresh';

function buildSyncPreamble(base) {
  const runtimeUrl = `${(base || '/').replace(/\/$/, '')}${RUNTIME_PATH}`;
  return `
    (function () {
      if (window.__STRK_REACT_REFRESH_PRE_INSTALLED__) return;
      window.__STRK_REACT_REFRESH_PRE_INSTALLED__ = true;

      // Minimal shim: pre-create the slots the React plugin checks for.
      // When the module-type runtime (still injected by @vitejs/plugin-react)
      // finishes loading, it will overwrite these with the real implementations.
      if (typeof window.$RefreshReg$ === 'undefined') {
        window.$RefreshReg$ = function () { return function (type) { return type; }; };
      }
      if (typeof window.$RefreshSig$ === 'undefined') {
        window.$RefreshSig$ = function () { return function (type) { return type; }; };
      }

      // Eagerly fetch the runtime so the module-type preamble's import
      // resolves almost immediately when the document parser reaches it.
      try {
        var pre = document.createElement('link');
        pre.rel = 'modulepreload';
        pre.href = ${JSON.stringify(runtimeUrl)};
        document.head && document.head.appendChild(pre);
      } catch (_) {}
    })();
  `;
}

export default function reactPreambleFixPlugin() {
  return {
    name: 'strikingly-react-preamble-fix',
    apply: 'serve',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const base = '/';
        const tag = `<script>${buildSyncPreamble(base)}</script>`;
        // Remove the existing module-type preamble that @vitejs/plugin-react
        // injects, then inject our synchronous version right before the
        // main module script.
        let out = html;
        out = out.replace(
          /<script type="module">\s*import\s*\{\s*injectIntoGlobalHook\s*\}\s*from\s*"[^"]*@react-refresh";[\s\S]*?window\.\$RefreshSig\$\s*=\s*\(\)\s*=>\s*\(type\)\s*=>\s*type;<\/script>/,
          '',
        );
        // Insert our sync preamble just before the body module entry.
        out = out.replace(
          /<script type="module" src="\/src\/main\.jsx"[^>]*><\/script>/,
          `${tag}<script type="module" src="/src/main.jsx"></script>`,
        );
        return out;
      },
    },
  };
}
