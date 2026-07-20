const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-ink py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-warm-gray/40" aria-hidden="true" />
              )}
              <span className="text-[11px] tracking-widest uppercase text-warm-gray-light font-sans">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
