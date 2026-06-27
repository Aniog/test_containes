// This project's hub page is rendered statically in /workspace/my-app/index.html
// (the brief explicitly approves "a single self-contained HTML file with inline <style>").
// React is not mounted for the /generators hub, so this component is intentionally
// kept as a tiny fallback in case any future route mounts a React tree.

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <p>
        The /generators hub page is rendered statically from <code>index.html</code>.
      </p>
    </div>
  )
}

export default App
