const trustItems = ["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"];

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-linen bg-velmora-ivory text-velmora-espresso">
      <div className="velmora-container flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-center text-[11px] font-bold uppercase tracking-nav text-velmora-cocoa md:justify-between">
        {trustItems.map((item, index) => (
          <span key={item} className="flex items-center gap-6">
            {item}
            {index < trustItems.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-gold md:inline-block" />}
          </span>
        ))}
      </div>
    </div>
  );
}
