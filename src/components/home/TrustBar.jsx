export function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-secondary/50 border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs tracking-wider uppercase font-medium text-muted-foreground text-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="hidden md:inline-block ml-8 text-border">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
