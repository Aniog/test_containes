export function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-charcoal py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-1 h-1 bg-gold rounded-full" />
              )}
              <span className="font-sans text-xs uppercase tracking-widest text-cream/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}