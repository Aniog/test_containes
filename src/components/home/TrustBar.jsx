import { Truck, RotateCcw, Gem, Heart } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F5F3EF] py-4 border-b border-[#E8E4DE]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-[#6B6560]"
            >
              <item.icon className="w-4 h-4 text-[#C9A962]" />
              <span className="tracking-[0.02em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}