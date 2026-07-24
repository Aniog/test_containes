export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-dark text-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[10px] md:text-xs tracking-widest uppercase font-sans">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            {i < items.length - 1 && (
              <span className="hidden md:inline text-white/15">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
