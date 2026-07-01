export default function StarRating({ rating, count, size = 'sm' }) {
  const dim = size === 'sm' ? 12 : 14

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => {
          const filled = i <= Math.round(rating)
          return (
            <svg
              key={i}
              width={dim}
              height={dim}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill={filled ? '#C9A96E' : 'none'}
                stroke="#C9A96E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        })}
      </div>
      {count !== undefined && (
        <span className="font-sans text-xs text-stone">
          {rating} ({count} reviews)
        </span>
      )}
    </div>
  )
}
