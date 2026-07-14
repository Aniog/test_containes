import { Star } from 'lucide-react'

export function Stars({ className = 'text-amber-700' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.6} />
      ))}
    </div>
  )
}
