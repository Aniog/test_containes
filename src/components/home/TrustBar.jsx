import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const perks = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-warm border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 py-4 sm:py-5 overflow-x-auto no-scrollbar">
          {perks.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 flex-shrink-0">
              <Icon size={14} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-[11px] sm:text-xs tracking-wider uppercase text-velmora-muted whitespace-nowrap font-medium">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
