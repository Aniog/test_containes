const GOLD = '#C9A96E';
const EMPTY = 'none';
const STROKE = '#C9A96E';

export default function StarRating({ rating, count, size = 12, showCount = false }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          const filled = i <= Math.round(rating);
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={filled ? GOLD : EMPTY}
              stroke={STROKE}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          );
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="font-inter text-xs text-velmora-mist">
          {rating} ({count})
        </span>
      )}
    </div>
  );
}
