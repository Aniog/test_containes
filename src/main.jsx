import React from 'react'
import ReactDOM from 'react-dom/client'

// The page is server-rendered in index.html
// This entry just renders a minimal React root.
// The HTML has all content statically rendered.
const App = () => null

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
