const ITEMS = [
  "Complimentary worldwide shipping on orders over $80",
  "30-day returns on unworn pieces",
  "18K gold plated · Hypoallergenic",
  "Designed in small batches",
];

export default function AnnouncementBar() {
  // Duplicate the items so the marquee can loop seamlessly.
  const looped = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-charcoal text-bone/85 overflow-hidden border-b border-ink/40">
      <div className="container-x py-2.5 flex items-center">
        <div className="overflow-hidden flex-1">
          <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
            {looped.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-eyebrow uppercase font-normal text-bone/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
