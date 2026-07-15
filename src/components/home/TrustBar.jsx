import { Truck, RefreshCw, Sparkles, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal">
      <div className="section-padding py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-velmora-stone">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}