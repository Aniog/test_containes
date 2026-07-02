import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export const StrkImage = forwardRef(function StrkImage(
  {
    id,
    query,
    ratio = "4x3",
    width = 600,
    alt = "",
    className,
    containerClassName,
    objectFit = "cover",
    asBackground = false,
    children,
    ...props
  },
  ref
) {
  if (asBackground) {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", containerClassName)}
        data-strk-bg-id={id}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <img
        ref={ref}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        alt={alt}
        className={cn("h-full w-full", objectFit === "cover" && "object-cover", objectFit === "contain" && "object-contain", className)}
        {...props}
      />
    </div>
  );
});
