import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--velmora-cream)] border-y border-[var(--velmora-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[var(--velmora-text-muted)]">
              <item.icon size={16} className="text-[var(--velmora-warm)]" />
              <span className="text-xs tracking-[0.08em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
