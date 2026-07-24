import { Shield, RotateCcw, Medal, Heart } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Medal, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-warm-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold-300 flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-warm-600 uppercase tracking-[0.1em] font-sans whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}