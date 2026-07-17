import { cn } from '../../lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = 'left',
}) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-3 md:mb-12',
        align === 'center' && 'items-center text-center',
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-luxe text-velmora-truffle">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={titleId}
        className="max-w-3xl font-display text-4xl leading-none text-velmora-ink md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-velmora-cocoa md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
