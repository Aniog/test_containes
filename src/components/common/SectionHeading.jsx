import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'default', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const eyebrowClass = tone === 'inverse' ? 'text-sky-100' : 'text-blue-600'
  const titleClass = tone === 'inverse' ? 'text-white' : 'text-slate-950'
  const descriptionClass = tone === 'inverse' ? 'text-white/75' : 'text-slate-700/75'

  return (
    <div className={cn(alignment, className)}>
      {eyebrow ? (
        <p className={cn('mb-4 text-sm font-semibold uppercase tracking-[0.2em]', eyebrowClass)}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('text-3xl font-semibold tracking-tight md:text-4xl', titleClass)}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-7 md:text-lg', descriptionClass)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
