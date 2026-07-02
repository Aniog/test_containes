import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function StrkImage({
  id,
  query,
  ratio,
  width,
  alt,
  className,
  img = true,
  ...props
}) {
  const attrs = img
    ? {
        'data-strk-img-id': id,
        'data-strk-img': query,
        'data-strk-img-ratio': ratio,
        'data-strk-img-width': width,
        src: PLACEHOLDER,
        alt,
      }
    : {
        'data-strk-bg-id': id,
        'data-strk-bg': query,
        'data-strk-bg-ratio': ratio,
        'data-strk-bg-width': width,
      }

  if (img) {
    return <img {...attrs} className={cn(className)} {...props} />
  }
  return <div {...attrs} className={cn(className)} {...props} />
}
