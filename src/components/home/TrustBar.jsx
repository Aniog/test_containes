import { Truck, RotateCcw, Shield, Gem } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto hide-scrollbar">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 flex-shrink-0">
              <Icon size={14} className="text-velmora-gold" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.08em] text-velmora-text-muted whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
