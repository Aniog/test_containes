import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-border py-4 md:py-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 md:flex-1 md:justify-center px-4">
              <Icon size={16} strokeWidth={1.5} className="text-text-accent flex-shrink-0" />
              <span className="text-text-secondary text-xs md:text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
