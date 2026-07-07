import { useId } from 'react'
import { cn } from '@/lib/utils'

export default function StrkBg({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  const fallbackId = useId().replace(/:/g, '')
  const bgId = id || `strk-bg-${fallbackId}`
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn('bg-cover bg-center', className)}
    >
      {children}
    </div>
  )
}
