export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-ivory border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="text-xs md:text-sm font-sans text-muted tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
