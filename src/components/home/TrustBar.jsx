import { Truck, RefreshCcw, Sparkles, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export function TrustBar() {
  return (
    <div className="border-b border-velmora-hairline bg-velmora-surface">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 md:py-5">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-velmora-muted">
            <item.icon size={16} strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
