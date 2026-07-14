import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-sand-100 border-y border-espresso/5">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-espresso/10">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 py-1"
            >
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] tracking-wider uppercase text-espresso/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
