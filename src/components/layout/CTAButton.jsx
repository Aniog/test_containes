import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function CTAButton({ to = '/contact', className, children = 'Get a Free Sourcing Quote' }) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-cta px-6 py-3 text-base font-semibold text-cta-foreground shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2',
        className,
      )}
    >
      {children}
    </Link>
  )
}
