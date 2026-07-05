import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    text: 'Free Worldwide Shipping',
  },
  {
    icon: RotateCcw,
    text: '30-Day Returns',
  },
  {
    icon: Gem,
    text: '18K Gold Plated',
  },
  {
    icon: Shield,
    text: 'Hypoallergenic',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-700 text-cream-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2 lg:gap-3"
              >
                <Icon size={18} className="text-gold-400 flex-shrink-0" />
                <span className="font-sans text-xs lg:text-sm tracking-wider uppercase text-cream-100">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
