import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-[var(--velmora-bg-secondary)] py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 sm:gap-3">
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--velmora-accent)] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-[var(--velmora-text-muted)] text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
