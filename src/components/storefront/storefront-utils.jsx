import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
}

export function ProductRating({ rating, reviews, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-xs tracking-[0.2em] ${light ? 'text-stone-200' : 'text-stone-500'}`}>
      <div className="flex items-center gap-1 text-amber-700">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <span>{rating.toFixed(1)} · {reviews} REVIEWS</span>
    </div>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow ? (
        <p className={`text-[0.68rem] uppercase tracking-[0.35em] ${light ? 'text-stone-300' : 'text-amber-700'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-4xl leading-none sm:text-5xl ${light ? 'text-stone-50' : 'text-stone-900'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`max-w-xl text-sm leading-7 sm:text-base ${light ? 'text-stone-300' : 'text-stone-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function GhostLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 border-b pb-1 text-xs uppercase tracking-[0.28em] transition-colors ${light ? 'border-stone-500 text-stone-200 hover:text-white' : 'border-stone-300 text-stone-700 hover:text-stone-950'}`}
    >
      {children}
    </Link>
  )
}
