import { Truck, RefreshCcw, Gem, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck,        label: "Free Worldwide Shipping" },
  { icon: RefreshCcw,   label: "30-Day Returns" },
  { icon: Gem,          label: "18K Gold Plated" },
  { icon: ShieldCheck,  label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-espresso text-bone-50 border-y border-bone-50/10"
    >
      <div className="container-x">
        <ul className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-bone-50/10">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 py-4 sm:py-5 px-3"
            >
              <Icon size={16} strokeWidth={1.5} className="text-gold-300 flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-widest2 text-bone-100/85 text-center">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
