import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-blush border-y border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-linen">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 px-6 py-4 flex-1 justify-center min-w-[160px]">
              <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-inter text-[11px] uppercase tracking-widest text-warm-gray whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
