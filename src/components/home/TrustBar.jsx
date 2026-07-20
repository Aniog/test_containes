export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-deep-800 text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {items.map((item, i) => (
            <span key={i} className="font-sans text-[11px] md:text-xs tracking-wider uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}