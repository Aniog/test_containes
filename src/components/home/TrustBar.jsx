import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-taupe/60 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink">
              <item.icon size={16} className="text-gold" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
