import React from 'react'
import { Star } from 'lucide-react'

export function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating)
              ? 'fill-velmora-gold text-velmora-gold'
              : 'text-velmora-warm-dark'
          }`}
        />
      ))}
      {count !== undefined && (
        <span className="text-xs text-velmora-muted-light ml-1">({count})</span>
      )}
    </div>
  )
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300'
  const variants = {
    primary: 'bg-velmora-base text-white hover:bg-velmora-gold',
    outline: 'border border-velmora-base text-velmora-base hover:bg-velmora-base hover:text-white',
    gold: 'bg-velmora-gold text-white hover:bg-velmora-gold-dark',
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className="border-b border-velmora-warm">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm tracking-wide uppercase">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
