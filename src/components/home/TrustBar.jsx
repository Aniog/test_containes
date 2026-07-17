import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-divider bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-divider">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3 py-4 md:py-5">
              <Icon size={18} className="text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm font-sans text-warm-white/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
