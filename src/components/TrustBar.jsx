export default function TrustBar() {
  const trustItems = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-velmora-bg-secondary border-y border-velmora-border">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-1 h-1 bg-velmora-accent rounded-full" />
              )}
              <span className="text-xs md:text-sm text-velmora-text-secondary tracking-wider uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}