import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export function render(url) {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
