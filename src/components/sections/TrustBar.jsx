import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-charcoal py-4 md:py-3">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={14} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-caption uppercase tracking-[0.08em] text-white/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
