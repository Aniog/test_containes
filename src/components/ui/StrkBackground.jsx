import { cn } from '@/lib/utils'

export default function StrkBackground({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
  ...props
}) {
  return (
    <div
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn('bg-taupe/30', className)}
      {...props}
    >
      {children}
    </div>
  )
}
