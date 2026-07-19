import { Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, text: 'Free Worldwide Shipping' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Sparkles, text: '18K Gold Plated' },
  { icon: Shield, text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border-subtle bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs md:text-sm text-muted font-medium uppercase tracking-[0.05em]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
