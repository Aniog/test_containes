import { Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react';

const trusts = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {trusts.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-4 md:py-5 bg-background"
            >
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-xs uppercase tracking-[0.1em] font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}