import { Truck, RefreshCw, Shield, Sparkles } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-espresso-800 text-cream/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-espresso-700">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 py-3 px-4"
            >
              <item.icon className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span className="text-[11px] tracking-wide uppercase font-sans font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
