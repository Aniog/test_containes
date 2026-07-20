import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-espresso border-b border-stone/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-inter text-[11px] tracking-widest uppercase text-cream-muted whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-stone/30 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
