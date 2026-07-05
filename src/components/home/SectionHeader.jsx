import { cn } from '@/lib/utils'

export default function SectionHeader({ eyebrow, title, italic, link, className, align = 'center' }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-widest3 text-taupe font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        id={title ? `section-${title.toLowerCase().replace(/\s+/g, '-')}-title` : undefined}
        className="font-serif text-4xl md:text-5xl leading-[1.1] text-espresso"
      >
        {italic ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic font-light text-espresso-soft">
              {title.split(' ').slice(-1)[0]}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {link && (
        <a
          href={link.href}
          className="mt-1 text-[11px] uppercase tracking-widest2 font-medium link-underline"
        >
          {link.label}
        </a>
      )}
    </div>
  )
}
