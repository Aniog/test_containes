import { Truck, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs font-sans tracking-[0.03em] text-white/70">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}