import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-parchment border-y border-velmora-sand">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-12 gap-y-3">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-wide text-velmora-stone">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
