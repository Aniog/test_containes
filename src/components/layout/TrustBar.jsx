import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-sand text-ink">
      <div className="max-w-container mx-auto px-5 md:px-10 py-3">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] md:text-[12px] uppercase tracking-editorial">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-ink/80"
            >
              <Icon className="w-3.5 h-3.5 text-champagne-deep" strokeWidth={1.5} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
