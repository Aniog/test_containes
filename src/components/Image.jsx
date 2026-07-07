import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const svgPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

export const StrkImage = forwardRef(function StrkImage(
  {
    id,
    query,
    ratio = '3x2',
    width = 600,
    alt = '',
    className,
    ...props
  },
  ref
) {
  return (
    <img
      ref={ref}
      alt={alt}
      className={cn('object-cover w-full h-full', className)}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={svgPlaceholder}
      {...props}
    />
  );
});

export function StrkBackground({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  );
}
