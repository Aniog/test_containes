import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-4 border-b border-white/5">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
          {trusts.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Icon size={14} className="text-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-wider text-white/70 whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
