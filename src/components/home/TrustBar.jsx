export default function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto py-3.5 no-scrollbar">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-6 sm:gap-10 whitespace-nowrap">
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.15em] uppercase text-cream/80">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:inline-block w-px h-3 bg-cream/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
