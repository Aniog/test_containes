import { Truck, RefreshCw, ShieldCheck, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="bg-velmora-espresso text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 py-5 border-t border-velmora-cream/10">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2">
              <Icon className="w-4 h-4 text-velmora-gold" />
              <span className="text-xs md:text-sm uppercase tracking-[0.1em]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
