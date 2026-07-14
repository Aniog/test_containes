export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-[var(--color-ivory)] py-4 border-b border-[var(--color-border)]">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="text-xs md:text-sm font-sans font-medium text-[var(--color-muted)] tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
