import { Truck, RotateCcw, Sparkles, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-parchment border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-ink">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs uppercase tracking-widest font-medium font-sans whitespace-nowrap">
                {item.label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-border ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
