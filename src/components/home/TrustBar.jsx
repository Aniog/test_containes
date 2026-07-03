const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-cream py-4 border-y border-sand">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate"
            >
              <svg
                className="w-4 h-4 text-gold flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
