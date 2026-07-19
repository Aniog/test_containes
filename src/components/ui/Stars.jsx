export default function Stars({ value = 5, size = 14, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(value);
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.95 4.75 17.65l1-5.85L1.5 7.65l5.9-.85L10 1.5z" />
          </svg>
        );
      })}
    </div>
  );
}
