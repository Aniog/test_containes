import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function ImageTag({
  id,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className,
  aspectClass,
  ...props
}) {
  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={cn("w-full object-cover", aspectClass, className)}
      {...props}
    />
  )
}

export function BackgroundImage({
  id,
  query,
  ratio = "16x9",
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
      className={cn("relative overflow-hidden bg-linen", className)}
    >
      {children}
    </div>
  )
}
