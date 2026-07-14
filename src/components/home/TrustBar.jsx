import { Truck, RotateCcw, Shield, Droplets } from 'lucide-react';

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Droplets, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-black text-velmora-ivory/80">
      <div className="max-w-[1440px] mx-auto section-pad">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 md:gap-x-14 py-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-velmora-ivory/70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
