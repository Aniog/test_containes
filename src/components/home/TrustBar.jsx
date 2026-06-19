import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: ShieldCheck, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trusts.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/70 shrink-0">
              <Icon className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] md:text-xs tracking-wider uppercase whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}