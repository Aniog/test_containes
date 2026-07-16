export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-gold-light/30 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3 md:py-4">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-1 md:gap-x-14">
          {items.map((text, i) => (
            <span
              key={i}
              className="text-[11px] md:text-xs tracking-[0.12em] uppercase text-taupe/70 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-gold/60 hidden md:block" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
