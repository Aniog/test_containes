import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-warm-border bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-4 overflow-x-auto gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 flex-shrink-0">
              <item.icon size={14} className="text-gold" />
              <span className="text-[11px] lg:text-xs text-warm-gray uppercase tracking-wider whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}