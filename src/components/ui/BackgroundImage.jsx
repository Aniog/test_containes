import { cn } from "@/lib/utils"

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
      data-strk-bg-id={String(id)}
      data-strk-bg={String(query)}
      data-strk-bg-ratio={String(ratio)}
      data-strk-bg-width={String(width)}
      className={cn("relative overflow-hidden bg-linen", className)}
    >
      {children}
    </div>
  )
}
