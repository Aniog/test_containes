export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div
      className={[
        'space-y-3',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
      ].join(' ')}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-dark)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-none text-[var(--color-text-dark)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-[var(--color-muted-dark)] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
