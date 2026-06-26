import { cn } from '@/lib/utils'

export function SectionHeading({ label, title, description, align = 'center', className }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <span className="inline-block uppercase tracking-wide text-primary font-semibold text-sm mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-neutral-600">{description}</p>
      )}
    </div>
  )
}
