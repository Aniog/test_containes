import { cn } from '@/lib/utils'

function SectionHeading({ eyebrow, title, description, id, align = 'left' }) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-4xl leading-none text-stone-900 md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
