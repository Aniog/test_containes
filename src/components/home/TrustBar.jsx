import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100 border-y border-charcoal-100/50">
      <div className="container-wide py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <item.icon size={16} className="text-gold-600" />
              <span className="font-sans text-xs tracking-[0.1em] text-charcoal-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
