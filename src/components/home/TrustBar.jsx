import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Truck,        label: "Free Worldwide Shipping" },
  { icon: RotateCcw,    label: "30-Day Returns"          },
  { icon: ShieldCheck,  label: "18K Gold Plated"         },
  { icon: Sparkles,     label: "Hypoallergenic"         },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Promises"
      className="bg-ivory-50 border-y border-hairline"
    >
      <div className="container-x py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-espresso-700"
            >
              <Icon size={16} strokeWidth={1.3} className="text-gold-400" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
