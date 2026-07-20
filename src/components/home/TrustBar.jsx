import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-warm border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5">
              <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-text-secondary font-medium">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
