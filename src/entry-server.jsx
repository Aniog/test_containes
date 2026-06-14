/**
 * Server-side entry. Renders the same GeneratorsHubPage markup that the
 * client uses, but without BrowserRouter (which depends on `document` at
 * render time). The directory is page-level: the same hub page renders for
 * `/`, `/generators`, and any `/generators/*` URL, so wrapping it in a
 * router during prerender is unnecessary.
 */
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import GeneratorsHubPage from './pages/GeneratorsHubPage.jsx';

export function render() {
  return renderToString(createElement(GeneratorsHubPage));
}
