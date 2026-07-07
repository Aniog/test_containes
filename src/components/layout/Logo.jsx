import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

function Logo({ className = '', light = false }) {
  return (
    <Link
      to="/"
      className={cn(
        'font-serif-display text-xl tracking-[0.55em] transition duration-300 sm:text-2xl',
        light ? 'text-stone-50' : 'text-stone-950',
        className,
      )}
      aria-label="Velmora Fine Jewelry home"
    >
      VELMORA
    </Link>
  )
}

export default Logo
