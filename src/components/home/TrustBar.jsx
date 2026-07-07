import { Truck, RefreshCw, Gem, Leaf } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-velmora-taupe/30 bg-velmora-cream px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 md:gap-12">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-brown">
            <item.icon size={16} className="text-velmora-gold-dark" />
            <span className="font-display text-[11px] font-medium uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
