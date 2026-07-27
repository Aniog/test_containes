import { cn } from '@/lib/utils'

export default function SectionHeader({ eyebrow, title, subtitle, dark = false, center = true, id }) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      {eyebrow && (
        <p className={cn('text-sm font-semibold uppercase tracking-wider', dark ? 'text-brand-300' : 'text-brand-600')}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'mt-3 text-3xl font-bold tracking-tight md:text-4xl',
          dark ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base leading-relaxed md:text-lg', dark ? 'text-slate-300' : 'text-slate-600')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
