import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-b border-mink/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-4 py-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-[10px] tracking-widest uppercase text-parchment/70 font-medium whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:block ml-4 text-mink">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
