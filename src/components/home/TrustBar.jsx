import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-warm-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-3 py-4 md:py-5 border-b border-warm-gray-700">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold-light" />
              <span className="text-xs tracking-wider font-sans font-medium uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}