export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-charcoal text-cream py-4">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider text-cream/80"
            >
              {index > 0 && <span className="hidden md:inline text-gold-antique">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}