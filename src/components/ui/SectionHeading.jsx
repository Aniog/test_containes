import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={cn('max-w-3xl', alignClass[align], className)}>
      {eyebrow && (
        <span className={cn('block text-sm font-semibold uppercase tracking-widest mb-3', light ? 'text-gold' : 'text-gold-dark')}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={cn('text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4', light ? 'text-white' : 'text-ink')}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn('text-base md:text-lg leading-relaxed', light ? 'text-white/80' : 'text-stone')}>
          {description}
        </p>
      )}
    </div>
  )
}
