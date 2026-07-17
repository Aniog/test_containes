export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-muted border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto whitespace-nowrap text-xs text-text-secondary uppercase tracking-wider font-medium">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-accent/40 hidden md:block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
