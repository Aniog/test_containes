import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-white border-y border-stone">
      <div className="container-main py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-16">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-charcoal">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs tracking-wide uppercase font-sans text-warm-gray">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
