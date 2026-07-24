export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-espresso text-cream/70">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 py-3.5">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-[11px] md:text-xs tracking-[0.12em] uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}