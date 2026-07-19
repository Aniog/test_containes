import { Truck, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-velvet-200 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 md:gap-16 py-4 overflow-x-auto">
          {trustItems.map(item => (
            <div key={item.label} className="flex items-center gap-2 text-velvet-600 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-gold" />
              <span className="text-xs tracking-wider uppercase font-sans">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}