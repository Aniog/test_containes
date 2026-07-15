import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-taupe-pale bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2">
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs sm:text-sm font-sans text-taupe font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}