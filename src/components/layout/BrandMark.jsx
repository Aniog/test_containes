import { Link } from 'react-router-dom'

export default function BrandMark({ variant = 'dark', className = '' }) {
  const color = variant === 'light' ? 'text-paper' : 'text-ink'
  const accent = 'text-ember'

  return (
    <Link to="/" className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`font-serif text-2xl tracking-wide ${color}`}>
        ARTITECT
      </span>
      <span className={`text-[10px] uppercase tracking-[0.3em] ${accent}`}>
        Machinery
      </span>
    </Link>
  )
}
