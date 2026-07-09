import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-espresso border-t border-b border-velmora-stone/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="py-4 flex items-center justify-center gap-6 md:gap-10 lg:gap-16 overflow-x-auto hide-scrollbar">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-velmora-sand">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
