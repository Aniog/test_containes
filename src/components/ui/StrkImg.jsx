import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export const StrkImg = forwardRef(function StrkImg(
  { id, query, ratio, width, alt = '', className, ...props },
  ref
) {
  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={cn(className)}
      {...props}
    />
  );
});
