// Reusable star rating component
export default function StarRating({ rating, reviewCount, size = 12, showCount = true }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(rating);
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={filled ? '#C9A96E' : 'none'}
              stroke={filled ? '#C9A96E' : '#D4CCC4'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          );
        })}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="font-sans text-[10px] text-stone">({reviewCount})</span>
      )}
    </div>
  );
}
