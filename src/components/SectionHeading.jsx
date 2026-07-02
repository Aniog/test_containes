import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function SectionHeading({ title, subtitle, linkTo, linkText, centered = false, className }) {
  return (
    <div className={cn('mb-10 md:mb-14', centered && 'text-center', className)}>
      {subtitle && (
        <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink font-medium">
        {title}
      </h2>
      {linkTo && linkText && (
        <Link
          to={linkTo}
          className="inline-block mt-4 font-sans text-xs uppercase tracking-widest text-ink underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
        >
          {linkText}
        </Link>
      )}
    </div>
  )
}
