import { Shield, CreditCard, Recycle, Heart } from 'lucide-react';

const trustItems = [
  { icon: CreditCard, label: 'Free Worldwide Shipping' },
  { icon: Recycle, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-b border-brand-border bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <item.icon className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[11px] tracking-[0.1em] uppercase text-brand-muted whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}