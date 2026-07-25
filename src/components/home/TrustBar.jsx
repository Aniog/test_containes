export default function TrustBar() {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-velmora-bg border-b border-velmora-border border-t py-3">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto no-scrollbar gap-8 text-xs tracking-widest uppercase text-velmora-text/80 font-serif">
          {benefits.map((benefit, idx) => (
            <span key={idx} className="flex items-center gap-4">
              {benefit}
              {idx < benefits.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-velmora-accent/50 hidden md:inline-block" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}