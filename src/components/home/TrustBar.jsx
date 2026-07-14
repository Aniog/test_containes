import { trustItems } from '../../data/products';
import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const iconMap = {
  'Free Worldwide Shipping': Truck,
  '30-Day Returns': RotateCcw,
  '18K Gold Plated': Gem,
  'Hypoallergenic': Heart
};

export default function TrustBar() {
  return (
    <section className="bg-[#1C1917] py-4 md:py-5">
      <div className="container">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {trustItems.map((item, index) => {
            const Icon = iconMap[item] || Gem;
            return (
              <div 
                key={item}
                className="flex items-center gap-2 text-white/90"
              >
                {index > 0 && (
                  <div className="hidden md:block w-px h-4 bg-white/20 mr-2 md:mr-4" />
                )}
                <Icon className="w-4 h-4 text-[#C4A962]" />
                <span className="text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
