import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto container-px py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] md:text-caption uppercase tracking-[0.1em] text-warm-gray">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
