import { cn } from '@/lib/utils'

export default function SectionTitle({ eyebrow, title, align = 'center', className }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className="font-serif text-ink-900 text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] text-balance">
          {title}
        </h2>
      )}
    </div>
  )
}
