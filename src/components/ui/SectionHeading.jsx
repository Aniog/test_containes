import { cn } from '@/lib/utils'

const SectionHeading = ({ align = 'left', description, eyebrow, title }) => (
  <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
    {eyebrow ? (
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-mist">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="mt-3 font-display text-4xl text-velmora-ink sm:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-sm leading-7 text-velmora-mist sm:text-base">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeading
