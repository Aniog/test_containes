import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={cn(
          'text-xs uppercase tracking-[0.34em]',
          theme === 'dark' ? 'text-velmora-gold' : 'text-stone-500',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 font-heading text-4xl leading-tight sm:text-5xl',
          theme === 'dark' ? 'text-velmora-ivory' : 'text-stone-900',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-8',
            theme === 'dark' ? 'text-velmora-ivory/75' : 'text-stone-600',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
