import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal text-ivory/80 py-4 border-b border-ivory/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold" />
              <span className="font-sans text-[11px] uppercase tracking-wider font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
