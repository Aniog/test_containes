import { cn } from '@/lib/utils'

export function Container({ className, children }) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export function Eyebrow({ children, className, light = false }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'h-px w-8',
          light ? 'bg-copper' : 'bg-copper'
        )}
      />
      <span
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.2em]',
          light ? 'text-copper' : 'text-copper'
        )}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  className,
  titleId,
  descId,
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        id={titleId}
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight',
          light ? 'text-ink-fg' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          id={descId}
          className={cn(
            'text-base md:text-lg max-w-2xl leading-relaxed',
            light ? 'text-ink-muted' : 'text-muted',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
