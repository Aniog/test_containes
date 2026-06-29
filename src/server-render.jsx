import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import GeneratorsHub from './pages/GeneratorsHub'

export function render() {
  return renderToString(
    <StaticRouter location="/generators">
      <GeneratorsHub />
    </StaticRouter>
  )
}