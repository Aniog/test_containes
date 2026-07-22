const SectionHeading = ({ eyebrow, title, description, action }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-velmora-mist">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-3">
          <h2 className="font-display text-4xl leading-none text-velmora-ink md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-sm leading-7 text-velmora-rose md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export default SectionHeading
