export function TrustBar() {
  const trustItems = [
    { icon: '✈️', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '💎', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-charcoal text-warmWhite py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <span className="text-gold-400 text-sm">{item.icon}</span>
              <span className="text-xs md:text-sm tracking-wide text-warmWhite/80">
                {item.text}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-warmWhite/20 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
