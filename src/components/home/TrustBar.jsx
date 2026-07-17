import { Truck, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-sand border-y border-velmora-stone">
      <div className="container-wide section-padding">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-velmora-charcoal">
              <item.icon size={15} className="text-velmora-gold" />
              <span className="text-xs font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}