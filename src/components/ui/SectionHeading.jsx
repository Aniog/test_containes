import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light = false,
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider',
            light ? 'text-amber' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 text-3xl font-bold tracking-tight sm:text-4xl',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-slate-300' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
