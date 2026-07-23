import { cn } from '@/lib/utils'

export const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div
    className={cn(
      'space-y-4',
      align === 'center' && 'mx-auto max-w-2xl text-center',
    )}
  >
    {eyebrow ? (
      <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
        {eyebrow}
      </p>
    ) : null}
    <div className="space-y-3">
      <h2 className="text-4xl leading-none md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-brand-cocoa md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  </div>
)
