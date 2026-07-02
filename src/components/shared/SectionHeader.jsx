import { Link } from 'react-router-dom'

const SectionHeader = ({ eyebrow, title, description, linkLabel, linkTo }) => {
  return (
    <div className="flex flex-col gap-5 border-b border-velmora-line pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="tracking-luxury text-xs uppercase text-velmora-gold">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-4xl text-velmora-ink sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-velmora-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {linkLabel && linkTo ? (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-ink transition hover:text-velmora-gold"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  )
}

export default SectionHeader
