// Inline SVG star that reliably fills with gold color
// (Lucide's Star icon uses fill="none" attribute which can conflict with Tailwind fill classes)
function StarSvg({ filled, size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={filled ? '#C9A96E' : 'none'}
        stroke="#C9A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StarRating({ rating, size = 12, showEmpty = true }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <StarSvg key={i} filled={i <= Math.round(rating)} size={size} />
      ))}
    </div>
  );
}
