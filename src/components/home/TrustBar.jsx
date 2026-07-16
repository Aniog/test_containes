const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-center md:justify-between py-3 gap-4 md:gap-8 overflow-x-auto text-[10px] md:text-xs tracking-[0.12em] uppercase">
          {items.map((item) => (
            <span key={item} className="whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
