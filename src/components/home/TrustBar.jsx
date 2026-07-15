import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Award, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-ink-100 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-ink-600 whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="text-xs md:text-sm font-sans tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}