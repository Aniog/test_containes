import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  align = 'center',
  light = false,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-[11px] uppercase tracking-widest2 mb-3',
            light ? 'text-champagne' : 'text-gold',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-serif text-4xl md:text-5xl leading-tight',
          light ? 'text-ivory' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed',
            light ? 'text-ivory/70' : 'text-stone',
          )}
        >
          {description}
        </p>
      )}
      {link && (
        <Link
          to={link.to}
          className={cn(
            'mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium border-b pb-1 transition-colors duration-300',
            light
              ? 'text-ivory border-ivory/40 hover:border-champagne hover:text-champagne'
              : 'text-ink border-ink/30 hover:border-gold hover:text-gold',
          )}
        >
          {link.label}
        </Link>
      )}
    </div>
  )
}
