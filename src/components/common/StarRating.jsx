import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, tone = 'dark' }) => {
  const textClass = tone === 'light' ? 'text-foreground' : 'text-ink'
  const mutedClass = tone === 'light' ? 'text-muted' : 'text-ink/60'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
        ))}
      </div>
      <span className={`text-sm ${textClass}`}>{rating.toFixed(1)}</span>
      {typeof reviews === 'number' ? (
        <span className={`text-sm ${mutedClass}`}>({reviews} reviews)</span>
      ) : null}
    </div>
  )
}

export default StarRating
