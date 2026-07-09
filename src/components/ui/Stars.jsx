import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const Stars = ({ className, value = 5 }) => (
  <div className={cn('flex items-center gap-1 text-velmora-gold', className)}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        aria-hidden="true"
        className="h-4 w-4 fill-current"
        strokeWidth={1.5}
      />
    ))}
    <span className="ml-2 text-xs uppercase tracking-[0.25em] text-velmora-mist">
      {value.toFixed(1)}
    </span>
  </div>
)

export default Stars
