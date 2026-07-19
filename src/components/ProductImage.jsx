import React from 'react';

const PLACEHOLDER_SRC =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function ProductImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt,
  className = '',
}) {
  return (
    <img
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_SRC}
    />
  );
}

export function BackgroundImage({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className = '',
  children,
}) {
  return (
    <div
      className={`${className}`}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  );
}
