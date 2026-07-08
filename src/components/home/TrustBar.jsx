export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-sand/50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              <span className="text-xs uppercase tracking-widest text-velmora-charcoal/70">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}