const alignment = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`flex flex-col gap-4 ${alignment[align]}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-luxe text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-4">
        <h2 className="font-display text-4xl text-velmora-ink sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-velmora-smoke sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
