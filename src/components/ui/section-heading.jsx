import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, copy, align = 'center', className }) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
          {centered && <span className="h-px flex-1 bg-line" aria-hidden="true" />}
          <span>{eyebrow}</span>
          {centered && <span className="h-px flex-1 bg-line" aria-hidden="true" />}
        </p>
      )}
      <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {copy && <p className="mt-4 text-sm leading-relaxed text-mocha sm:text-base">{copy}</p>}
    </div>
  )
}
