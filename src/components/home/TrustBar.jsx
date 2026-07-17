import { Shield, RotateCcw, Award, Heart } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-stone/10 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2.5">
              <item.icon size={14} className="text-gold flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-widest text-charcoal/80 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}