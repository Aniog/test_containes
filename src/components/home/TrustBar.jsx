export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-velmora-charcoal py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-velmora-taupe">·</span>}
              <span className="text-velmora-sand text-xs uppercase tracking-widest">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}