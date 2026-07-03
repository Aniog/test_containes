export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-charcoal text-cream py-4">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="text-xs md:text-sm tracking-widest text-cream/80 flex items-center gap-2"
            >
              {index > 0 && <span className="text-champagne">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}