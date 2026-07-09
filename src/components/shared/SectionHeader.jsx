import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SectionHeader({ eyebrow, title, description, link }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {link ? (
        <Link className="accent-link" to={link.href}>
          {link.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  )
}

export default SectionHeader
