import { Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-nav-dark">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-white/80">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-wider font-sans">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
