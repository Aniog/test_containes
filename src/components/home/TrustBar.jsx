export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-cream border-b border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-2 py-3.5">
          {items.map((item, i) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-taupe font-medium"
            >
              {item}
              {i < items.length - 1 && (
                <span className="hidden md:inline ml-12 text-linen">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
