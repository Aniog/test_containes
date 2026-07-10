import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b hairline bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-3.5">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-10 overflow-x-auto hide-scrollbar">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 whitespace-nowrap">
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-xs md:text-sm tracking-wide text-warmgray">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
