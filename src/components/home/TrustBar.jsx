import { Truck, RotateCcw, Shield, CheckCircle } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: CheckCircle, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-brand-border-light bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
              <span className="font-sans text-xs text-brand-text-secondary uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}