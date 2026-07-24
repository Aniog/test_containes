import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2.5">
              <item.icon size={16} className="text-gold-600 flex-shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-wider text-walnut-600">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
