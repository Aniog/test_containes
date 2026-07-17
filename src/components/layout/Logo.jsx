import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function Logo({ light = true, className }) {
  return (
    <Link to="/" className={cn('flex items-center gap-3 group', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-ink transition-transform duration-300 group-hover:rotate-90">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 17 L12 7 L21 17" />
          <path d="M7 17 L12 12 L17 17" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-lg font-extrabold tracking-tight', light ? 'text-white' : 'text-ink')}>
          ARTITECT
        </span>
        <span className={cn('text-[10px] font-semibold tracking-overline uppercase', light ? 'text-mist' : 'text-slate-body')}>
          Machinery
        </span>
      </span>
    </Link>
  )
}
