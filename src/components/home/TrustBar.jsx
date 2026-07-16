export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-espresso text-white/70">
      <div className="section-padding py-3.5">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 text-[11px] md:text-xs font-medium tracking-wider uppercase">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-velmora-gold/50 hidden md:block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}