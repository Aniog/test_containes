export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="w-full bg-brand-surface border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-10 py-3 overflow-x-auto whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-brand-soft">
              <span className="w-1 h-1 rounded-full bg-brand-gold" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}