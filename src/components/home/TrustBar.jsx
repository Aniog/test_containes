import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal-100/40 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {trusts.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-1"
            >
              <item.icon className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
              <span className="text-caption uppercase tracking-[0.1em] text-charcoal-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
