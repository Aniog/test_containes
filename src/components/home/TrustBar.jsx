export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#faf8f5] border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="text-[11px] tracking-[0.08em] uppercase text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
