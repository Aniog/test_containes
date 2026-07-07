const Stars = ({ rating = 5, className = '' }) => {
  const filled = Math.round(rating)

  return (
    <div
      className={`flex items-center gap-1 text-gold ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true" className="text-sm leading-none">
          {index < filled ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default Stars
