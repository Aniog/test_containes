import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream border-b border-velmora-warm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 md:py-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 text-velmora-base"
            >
              <Icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-wider font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
