import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-t border-b border-border-light bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border-light">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-1"
            >
              <item.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="font-sans text-[11px] md:text-xs text-warm-gray uppercase tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
