import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-ivory border-y border-line">
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 py-4 sm:py-5 px-3 text-center"
            >
              <Icon size={16} strokeWidth={1.5} className="text-gold-dark flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-medium text-espresso">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
