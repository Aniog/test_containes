export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-brand-ink text-brand-cream/60">
      <div className="section-padding py-3 overflow-hidden">
        <div className="flex items-center justify-center gap-8 md:gap-16 text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans font-medium">
          {items.map((item) => (
            <span key={item} className="whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}