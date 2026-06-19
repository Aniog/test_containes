import { Shield, Truck, RefreshCw, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-deep-950 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs tracking-wide">
              <Icon className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
              <span className="text-cream-300/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
