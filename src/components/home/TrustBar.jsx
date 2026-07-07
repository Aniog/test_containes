const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export function TrustBar() {
  return (
    <div className="bg-cream border-y border-warmGray-200">
      <div className="section-container">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12 py-3.5">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:block w-px h-3 bg-warmGray-300" aria-hidden="true" />
              )}
              <span className="font-sans text-xs font-medium uppercase tracking-extra-wide text-warmGray-600">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
