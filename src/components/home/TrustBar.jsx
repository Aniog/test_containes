const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-base border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-velmora-gold" />
              <span className="text-[11px] tracking-wider uppercase text-white/50 font-sans">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}