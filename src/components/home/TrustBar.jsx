import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-cream border-y border-brand-sand">
      <div className="container-wide py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 md:gap-3">
              <item.icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="text-xs tracking-wider text-brand-charcoal font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
