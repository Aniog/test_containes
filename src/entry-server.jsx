import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import GeneratorsHub from './pages/GeneratorsHub'

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <GeneratorsHub />
    </StaticRouter>
  )
  return html
}
