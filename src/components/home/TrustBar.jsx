export default function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="bg-velmora-cream border-y border-border">
      <div className="container-velmora py-3 sm:py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:gap-x-10 text-xs sm:text-sm text-velmora-charcoal/80 tracking-wide">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
