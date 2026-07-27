import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (
        <p className={cn('text-xs font-semibold uppercase tracking-widest', dark ? 'text-accent-200' : 'text-accent-600')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('mt-3 text-3xl font-bold tracking-tight md:text-4xl', dark ? 'text-white' : 'text-slate-900')}>
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-lg leading-relaxed', dark ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  )
}
