import { Truck, RotateCcw, Award, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section className="bg-[#1A1A1A] text-[#FDFCFA] py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs tracking-wider uppercase"
            >
              <item.icon size={16} strokeWidth={1.5} className="text-[#C9A962]" />
              <span className="text-white/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}