import { cn } from '@/lib/utils'

const SectionHeading = ({ eyebrow, title, description, align = 'center', dark = false }) => {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-brand-300' : 'text-brand-600',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 text-3xl font-bold tracking-tight md:text-4xl',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed md:text-lg',
            dark ? 'text-slate-300' : 'text-slate-body',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
