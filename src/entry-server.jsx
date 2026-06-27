import React from 'react';
import { renderToString } from 'react-dom/server';
import GeneratorsHub from './pages/GeneratorsHub.jsx';

export function render() {
  return renderToString(React.createElement(GeneratorsHub));
}
