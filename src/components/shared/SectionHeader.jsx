import { cn } from '@/lib/cn'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  tone = 'dark',
}) {
  const isCenter = align === 'center'
  const titleColor = tone === 'light' ? 'text-white' : 'text-brand-ink'
  const descColor = tone === 'light' ? 'text-white/80' : 'text-brand-muted'

  return (
    <div
      className={cn(
        'max-w-3xl',
        isCenter && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.18em] mb-3',
            tone === 'light' ? 'text-brand-accent-2' : 'text-brand-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
          titleColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base md:text-lg leading-relaxed', descColor)}>
          {description}
        </p>
      )}
    </div>
  )
}