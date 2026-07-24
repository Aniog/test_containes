import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--velmora-bg-alt)] border-y border-[var(--velmora-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[var(--velmora-text-muted)]">
              <item.icon size={16} strokeWidth={1.5} />
              <span className="text-xs tracking-[0.1em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
