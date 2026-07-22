import { Package, RotateCcw, Sparkles, Shield } from 'lucide-react';

const trustItems = [
  { icon: Package, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-blush border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-3.5">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={13} strokeWidth={1.5} className="text-gold-dark flex-shrink-0" />
              <span className="font-manrope text-xs tracking-[0.12em] uppercase text-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
