export function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="border-b border-velmora-border bg-velmora-cream">
      <div className="container-velmora">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-[10px] uppercase tracking-[0.16em] text-velmora-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
