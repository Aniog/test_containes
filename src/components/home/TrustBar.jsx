export default function TrustBar() {
  const features = [
    { icon: '✈', label: 'Free Worldwide Shipping' },
    { icon: '↩', label: '30-Day Returns' },
    { icon: '✦', label: '18K Gold Plated' },
    { icon: '♡', label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-ivory py-4 border-y border-light-gray">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs uppercase tracking-ui text-warm-gray"
            >
              <span className="text-gold text-sm">{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
