import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-deep border-y border-hairline">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ul className="flex items-center justify-between gap-4 py-4 overflow-x-auto no-scrollbar">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 flex-shrink-0 text-ink-soft"
              >
                <Icon className="w-4 h-4 text-champagne" strokeWidth={1.4} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.22em] whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
