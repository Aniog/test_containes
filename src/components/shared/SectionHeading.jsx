import { cn } from '@/lib/utils'

function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'mx-auto max-w-2xl text-center',
      )}
    >
      {eyebrow ? (
        <p className={cn('text-xs uppercase tracking-luxe text-champagne', light && 'text-pearl')}>
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className={cn('font-serif text-4xl leading-none text-velvet md:text-5xl', light && 'text-ivory')}>
          {title}
        </h2>
        {description ? (
          <p className={cn('max-w-2xl text-sm leading-7 text-smoke md:text-base', light && 'text-pearl')}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
