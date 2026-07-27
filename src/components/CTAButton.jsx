import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CTAButton({ children, to = '/contact', variant = 'accent', className = '' }) {
  const styles = {
    accent:
      'bg-accent text-ink hover:bg-accent-dark hover:text-white',
    outlineLight:
      'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white',
    outlineDark:
      'border border-white/40 text-white hover:bg-white/10',
    brand:
      'bg-brand text-white hover:bg-brand-dark',
  }

  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}
