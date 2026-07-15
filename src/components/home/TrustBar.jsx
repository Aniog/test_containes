const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
  'Ethically Sourced',
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
  'Ethically Sourced',
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-divider overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8">
            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
            <span className="font-inter text-[10px] uppercase tracking-[0.18em] text-espresso">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
