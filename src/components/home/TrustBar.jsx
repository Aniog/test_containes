import { Truck, RotateCcw, Sparkles, Heart } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-parchment border-b border-warmgray">
      <div className="mx-auto px-5 md:px-8 lg:px-12 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-2">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-xs md:text-sm text-ink">
              <Icon className="w-4 h-4 text-gold-600" strokeWidth={1.6} />
              <span className="uppercase tracking-[0.14em] font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
