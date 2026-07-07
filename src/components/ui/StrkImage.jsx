import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const StrkImage = forwardRef(function StrkImage(
  { id, query, ratio = '4x3', width = 600, alt = '', className, src },
  ref
) {
  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={
        src ||
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      }
      alt={alt}
      className={cn('object-cover w-full h-full', className)}
    />
  );
});

export default StrkImage;

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
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn('bg-charcoal', className)}
    >
      {children}
    </div>
  );
}
