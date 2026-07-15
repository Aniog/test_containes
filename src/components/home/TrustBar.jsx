export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-espresso text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5">
          {items.map((item, i) => (
            <span key={i} className="text-[11px] tracking-widest uppercase text-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
