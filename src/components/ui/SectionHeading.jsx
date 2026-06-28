import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, description, centered = false, titleId }) {
  return (
    <div className={cn('space-y-4', centered && 'mx-auto max-w-2xl text-center')}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-brand text-velmora-taupe">{eyebrow}</p>
      )}
      <h2
        id={titleId}
        className="font-display text-4xl leading-none text-velmora-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-7 text-velmora-taupe sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
