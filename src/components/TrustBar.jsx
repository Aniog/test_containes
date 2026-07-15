import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 md:gap-0">
          {trusts.map((item) => (
            <div key={item.label} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold-400" />
              <span className="text-[11px] md:text-xs font-sans tracking-wide text-white/90 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}