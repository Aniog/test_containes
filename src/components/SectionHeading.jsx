import { cn } from '@/lib/utils'

export function SectionHeading({ label, title, description, align = 'center', className }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  )
}
