import { cn } from '@/lib/utils'

export function Section({ children, className, id }) {
  return (
    <section id={id} className={cn('section-pad', className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description, align = 'center', className }) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  )
}
