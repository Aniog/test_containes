// The /generators hub is a fully static page rendered directly in index.html
// (content lives outside #root). React mounts into a hidden #root and renders
// nothing so the static markup is never wiped. Interactivity is handled by
// vanilla JS in src/generators-page.js.
function App() {
  return null
}

export default App
