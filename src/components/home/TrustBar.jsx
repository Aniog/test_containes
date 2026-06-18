import { Truck, RotateCcw, Sparkles, Leaf } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-y border-stone-warm/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 md:py-6">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-charcoal text-[11px] md:text-xs uppercase tracking-eyebrow font-medium"
            >
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
