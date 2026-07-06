import { Truck, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Sparkles, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="border-b border-hairline bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-3.5 md:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-warm-gray md:gap-x-10">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <item.icon size={14} className="text-gold" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
