const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-espresso text-velmora-cream/70 py-3 md:py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap px-6">
        {trustItems.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-velmora-gold/50" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
