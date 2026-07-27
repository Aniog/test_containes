import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider mb-3',
            light ? 'text-action' : 'text-primary-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl font-bold tracking-tight',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-slate-200' : 'text-slate-body',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
