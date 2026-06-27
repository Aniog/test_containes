import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import GeneratorsPage from './src/pages/GeneratorsPage.jsx'

export function renderPage() {
  return renderToString(
    React.createElement(
      StaticRouter,
      { location: '/generators' },
      React.createElement(GeneratorsPage)
    )
  )
}
