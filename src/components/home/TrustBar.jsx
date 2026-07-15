import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5 md:py-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center md:justify-start gap-3">
              <item.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="font-sans text-xs tracking-wider uppercase text-ink-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}