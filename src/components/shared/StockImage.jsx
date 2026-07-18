import React from 'react';
import { ImageHelper } from '@strikingly/sdk';

// Transparent 1x1 PNG used as a layout-safe placeholder before the Strikingly
// runtime loader replaces it with the stock image.
const PLACEHOLDER_SRC =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export function StockImage({
  id,
  ratio,
  width,
  queryParts = [],
  alt,
  className = '',
}) {
  const query = queryParts.map((part) => `[${part}]`).join(' ');
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_SRC}
      loading="lazy"
    />
  );
}

export function StockBackground({
  id,
  ratio,
  width,
  queryParts = [],
  className = '',
}) {
  const query = queryParts.map((part) => `[${part}]`).join(' ');
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      aria-hidden="true"
    />
  );
}
