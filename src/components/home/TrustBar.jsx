const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between py-2.5 md:py-3 text-[9px] sm:text-[10px] md:text-xs tracking-[0.12em] uppercase gap-3 md:gap-8 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <span key={item} className="whitespace-nowrap flex-shrink-0 text-center">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
