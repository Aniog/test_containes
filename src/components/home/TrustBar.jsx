import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-y border-linen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 py-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <item.icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="font-sans text-[10px] tracking-widest uppercase text-muted font-medium whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden lg:block w-px h-3 bg-linen ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
