import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1A1A1A] text-[#FAF8F5] py-4">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-center gap-6 md:gap-12 flex-wrap">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-[#C5A572]" />
            <span className="text-[11px] md:text-xs uppercase tracking-wider text-[#FAF8F5]/80">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
