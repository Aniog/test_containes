export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-oxford border-t border-b border-cream/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16 py-3.5 overflow-x-auto">
          {items.map((text, i) => (
            <span key={text} className="text-[11px] sm:text-xs font-medium tracking-wider uppercase text-cream/50 whitespace-nowrap">
              {i > 0 && <span className="mr-6 sm:mr-10 lg:mr-16 text-cream/15">&middot;</span>}
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
