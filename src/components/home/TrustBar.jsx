export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-charcoal text-white/80 py-3.5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] md:text-xs tracking-widest uppercase">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-velmora-gold rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
