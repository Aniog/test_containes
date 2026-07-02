import { Truck, RefreshCw, Gem, Leaf } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-velmora-base/10 bg-velmora-cream py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 sm:px-6 lg:px-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-taupe">
            <item.icon className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
