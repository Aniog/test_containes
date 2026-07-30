export default function StarRating({ rating, count, size = 'sm' }) {
  const starSize = size === 'sm' ? 12 : 14;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => {
          const filled = s <= Math.round(rating);
          return (
            <svg
              key={s}
              width={starSize}
              height={starSize}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={filled ? '#C9A96E' : 'none'}
                stroke={filled ? '#C9A96E' : '#E8E0D4'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          );
        })}
      </div>
      {count !== undefined && (
        <span className="font-sans text-xs text-pebble">({count})</span>
      )}
    </div>
  );
}
