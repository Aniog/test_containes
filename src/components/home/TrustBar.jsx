import { Truck, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RefreshCw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: ShieldCheck, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-deepbrown text-cream/80">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-xs tracking-wider uppercase font-sans font-medium">
              <Icon className="w-3.5 h-3.5 text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
