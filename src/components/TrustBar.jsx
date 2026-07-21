import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-border bg-velmora-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4 md:py-5">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={16} className="text-velmora-gold shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-velmora-charcoal">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
