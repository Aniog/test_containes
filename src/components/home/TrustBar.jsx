import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-50 border-y border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2.5">
              <item.icon size={16} className="text-brand-500 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-espresso-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
