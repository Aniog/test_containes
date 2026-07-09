import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-velvet-900 border-b border-velvet-800">
      <div className="velmora-container">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 md:gap-x-12 py-4 md:py-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <span className="text-xs font-sans tracking-wider uppercase text-velvet-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
