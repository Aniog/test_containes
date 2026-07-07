import { Truck, RefreshCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-taupe/20 bg-ivory py-3.5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-charcoal/80">
            <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
