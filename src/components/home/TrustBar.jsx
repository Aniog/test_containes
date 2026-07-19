export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5">
        <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-[11px] sm:text-xs text-taupe tracking-wide uppercase flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-gold rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}