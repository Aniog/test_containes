import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className,
}) {
  const isInverse = tone === 'inverse'

  return (
    <div
      className={cn(
        'max-w-3xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-[0.2em]',
            isInverse ? 'text-blue-200' : 'text-blue-700',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-3xl font-semibold tracking-tight md:text-4xl',
          isInverse ? 'text-white' : 'text-slate-950',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-base leading-7 md:text-lg',
            isInverse ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
