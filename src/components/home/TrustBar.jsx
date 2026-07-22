import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-sand">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0 py-4 md:py-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-charcoal">
              <item.icon size={16} className="text-warm-gold" strokeWidth={1.5} />
              <span className="text-xs md:text-sm tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
