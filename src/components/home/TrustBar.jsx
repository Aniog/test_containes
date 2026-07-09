import { Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-cream border-y border-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5"
            >
              <item.icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span className="font-sans text-xs text-brand-charcoal-light uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}