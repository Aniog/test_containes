import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-sand bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 md:gap-12 lg:justify-between lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-velmora-taupe">
            <Icon size={16} strokeWidth={1.5} />
            <span className="font-sans text-xs uppercase tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}