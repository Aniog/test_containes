import { Truck, RefreshCw, Shield, Sparkles } from 'lucide-react';

const trusts = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Shield, text: '18K Gold Plated' },
  { icon: Sparkles, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velvet">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between py-3 md:py-4 gap-6 md:gap-0 flex-wrap">
          {trusts.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-stone/80">
              <t.icon className="w-3.5 h-3.5 text-warmgold/70" />
              <span className="font-sans text-[11px] md:text-xs tracking-wider uppercase">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
