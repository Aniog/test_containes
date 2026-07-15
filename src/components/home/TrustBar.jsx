export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-foreground text-background py-3">
      <div className="container-max section-padding">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {items.map((item, index) => (
            <span
              key={item}
              className="text-[10px] sm:text-xs tracking-[0.15em] uppercase font-light flex items-center gap-2"
            >
              {item}
              {index < items.length - 1 && (
                <span className="hidden sm:inline text-white/30">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
