import { Star } from 'lucide-react'

const Stars = ({ className = 'h-4 w-4', count = 5 }) => {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className={`${className} fill-velmora-gold text-velmora-gold`} />
      ))}
    </div>
  )
}

export default Stars
