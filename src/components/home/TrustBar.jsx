export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-bg-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs font-medium tracking-extra-wide uppercase text-text-muted"
            >
              {index > 0 && (
                <span className="w-1 h-1 bg-accent rounded-full" />
              )}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
