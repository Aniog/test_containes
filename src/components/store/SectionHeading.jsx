import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  titleId,
  descriptionId,
  className,
}) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-3xl flex-col gap-4 text-ink',
        align === 'left' ? 'items-start text-left' : 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.35em] text-mocha">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-4xl leading-none tracking-[0.02em] text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          id={descriptionId}
          className="max-w-2xl text-sm leading-7 text-mocha sm:text-base"
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
