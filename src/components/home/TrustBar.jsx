import { Truck, RotateCcw, CircleDot, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="bg-background border-b border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 md:py-5">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-12 overflow-x-auto hide-scrollbar">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 flex-shrink-0">
              <item.icon className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm text-foreground font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
