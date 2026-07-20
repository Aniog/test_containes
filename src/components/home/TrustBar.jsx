export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-cream-dark py-4 border-b border-border">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && <span className="text-gold">·</span>}
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal-light">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}