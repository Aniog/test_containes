import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-y hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2.5">
              {i > 0 && (
                <span className="hidden md:block w-px h-4 bg-smoke/20 mx-2" />
              )}
              <Icon size={14} className="text-champagne flex-shrink-0" />
              <span className="font-sans text-xs tracking-widest uppercase text-smoke/80 font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
