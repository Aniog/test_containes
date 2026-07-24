import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-divider bg-night/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 py-2 lg:py-0 lg:border-r last:border-r-0 border-divider"
            >
              <item.icon size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-[11px] tracking-[0.15em] uppercase text-champagne/70 font-sans font-light whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
