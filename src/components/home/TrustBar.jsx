import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { Icon: Truck, label: "Free Worldwide Shipping" },
  { Icon: RefreshCw, label: "30-Day Returns" },
  { Icon: Sparkles, label: "18K Gold Plated" },
  { Icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-cream bg-ivory-soft">
      <ul className="mx-auto grid max-w-container grid-cols-2 gap-y-4 px-5 py-6 md:grid-cols-4 md:px-10 md:py-5 lg:px-16">
        {ITEMS.map(({ Icon, label }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-3 text-[10.5px] font-medium uppercase tracking-widest2 text-espresso-soft md:justify-start md:gap-4 md:text-[11px]"
          >
            <Icon size={16} strokeWidth={1.4} className="text-gold-deep" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
