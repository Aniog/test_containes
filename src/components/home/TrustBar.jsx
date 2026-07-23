import { Truck, RefreshCcw, CircleDot, ShieldCheck } from 'lucide-react';

const ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: CircleDot, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <section className="border-b border-hairline bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 text-espresso"
            >
              <item.icon className="h-4 w-4 text-gold" />
              <span className="whitespace-nowrap font-sans text-xs font-medium uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
