const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  return (
    <div className={`flex flex-col gap-4 ${alignments[align] || alignments.left}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-stone">
          {eyebrow}
        </span>
      ) : null}
      <div className="max-w-2xl space-y-3">
        <h2 className="font-serif text-4xl leading-none text-velmora-ink md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-sm leading-7 text-velmora-stone md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
