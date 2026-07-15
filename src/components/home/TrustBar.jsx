import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-stone/15">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-[10px] uppercase tracking-widest text-mink font-sans whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-stone/25 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
