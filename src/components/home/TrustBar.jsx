const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export function TrustBar() {
  return (
    <section className="border-b border-sand bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 md:gap-4 py-4 hide-scrollbar">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex-shrink-0 md:text-center text-xs md:text-sm uppercase tracking-brand text-ink/80 font-sans"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
