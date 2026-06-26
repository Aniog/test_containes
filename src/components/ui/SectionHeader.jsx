import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'

export function SectionHeader({ title, subtitle, badge, centered = true }) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center')}>
      {badge && <Badge className='mb-4'>{badge}</Badge>}
      <h2 className='text-3xl font-bold text-navy md:text-4xl'>{title}</h2>
      {subtitle && (
        <p className='mt-4 max-w-2xl text-lg text-slate-600 md:text-xl'>
          {subtitle}
        </p>
      )}
    </div>
  )
}