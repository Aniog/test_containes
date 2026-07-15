import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-linen">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-3.5 md:py-4">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-10 overflow-x-auto">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-muted flex-shrink-0"
            >
              <item.icon size={16} className="text-gold" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.12em] font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
