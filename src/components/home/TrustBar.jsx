import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Shield, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velvet-950 border-b border-velvet-800">
      <div className="max-w-[1440px] mx-auto section-padding py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-ivory-100/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
