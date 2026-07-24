const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velvet-950 text-sand-300">
      <div className="container-wide section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto scrollbar-hide">
          {items.map((item, i) => (
            <span key={i} className="text-[11px] md:text-xs font-sans tracking-wide uppercase whitespace-nowrap flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-velvet-500 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
