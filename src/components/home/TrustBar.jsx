import { Truck, RotateCcw, CircleDot, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5 overflow-x-auto hide-scrollbar gap-6 md:gap-0">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 flex-shrink-0">
              <Icon className="w-4 h-4 text-velmora-text-muted" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs tracking-[0.1em] uppercase text-velmora-text-muted whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
