import { Globe, RotateCcw, Gem, Heart } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velvet-950">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-14">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-velvet-300">
              <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.08em] uppercase font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
