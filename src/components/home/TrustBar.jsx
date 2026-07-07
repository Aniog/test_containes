export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-velmora-ivory py-4 border-b border-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:inline text-velmora-taupe/40">·</span>
              )}
              <span className="text-xs sm:text-sm tracking-wider text-velmora-charcoal/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}