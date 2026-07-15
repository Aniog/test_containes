export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', label: 'Free Worldwide Shipping' },
    { icon: '↩️', label: '30-Day Returns' },
    { icon: '✨', label: '18K Gold Plated' },
    { icon: '🌿', label: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-warm-white border-y border-velmora-taupe/30 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-velmora-charcoal">
              <span className="text-lg">{item.icon}</span>
              <span className="tracking-wide font-light">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
