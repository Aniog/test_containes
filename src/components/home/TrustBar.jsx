import { Truck, RotateCcw, Gem, Shield } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Gem, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-50 border-y border-stone-200">
      <div className="section-padding py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-dark-700">
              <Icon size={16} className="text-gold-500" />
              <span className="font-sans text-xs uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
