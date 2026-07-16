import { Truck, RotateCcw, Shield, Droplets } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Droplets, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal-900 border-y border-charcoal-800">
      <div className="container-wide py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2.5 text-cream-200">
              <item.icon size={16} className="text-gold-400 flex-shrink-0" />
              <span className="text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
