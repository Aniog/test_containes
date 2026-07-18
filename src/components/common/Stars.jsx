import { Star } from 'lucide-react'

export default function Stars({ className = '' }) {
  return (
    <div className={`flex items-center gap-1 text-[var(--color-accent)] ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  )
}
