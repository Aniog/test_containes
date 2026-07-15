import { Truck, RefreshCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-velmora-sand bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-3 md:flex md:items-center md:justify-between">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-velmora-taupe md:justify-start"
            >
              <item.icon size={16} className="shrink-0 text-velmora-gold" />
              <span className="text-[11px] font-medium uppercase tracking-widest sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
