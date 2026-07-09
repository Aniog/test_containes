import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-brand-mid-gray/30">
      <div className="max-w-7xl mx-auto section-padding py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2">
              <Icon size={14} strokeWidth={1.5} className="text-brand-gold" />
              <span className="font-sans text-[10px] uppercase tracking-ultra-wide text-brand-warm-gray">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
