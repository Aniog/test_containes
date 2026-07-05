export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-xs md:text-sm text-muted-fg uppercase tracking-wider font-sans">
            {i > 0 && <span className="hidden md:inline text-border">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
