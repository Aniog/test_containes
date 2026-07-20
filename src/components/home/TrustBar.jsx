import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="border-b border-sand bg-bone"
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-stretch justify-between gap-y-2 px-5 sm:px-8 lg:px-12">
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-1 items-center justify-center gap-3 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-mink sm:py-5 sm:text-[11px] ${
              i > 0 ? 'border-l border-sand' : ''
            }`}
          >
            <item.icon className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.25} />
            <span className="whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
