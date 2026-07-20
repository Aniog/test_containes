import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function SectionHeader({ title, subtitle, link }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="font-serif text-3xl text-velmora-dark md:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-velmora-muted md:text-base">{subtitle}</p>
        )}
      </div>
      {link && (
        <Link
          to={link.href}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-velmora-dark transition hover:text-velmora-gold"
        >
          {link.label}
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  )
}
