import { cn } from '@/lib/utils'

export default function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className 
}) {
  return (
    <div className={cn(
      'mb-10 lg:mb-14',
      centered && 'text-center',
      className
    )}>
      {eyebrow && (
        <span className={cn(
          'inline-block text-sm font-semibold uppercase tracking-widest mb-3',
          light ? 'text-cta-400' : 'text-cta-500'
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        'text-3xl lg:text-4xl font-bold mb-4',
        light ? 'text-white' : 'text-navy-900'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-3xl leading-relaxed',
          centered && 'mx-auto',
          light ? 'text-navy-200' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
