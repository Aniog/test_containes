import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink-800 bg-ink-900">
      <div className="mx-auto flex max-w-wide items-center justify-center overflow-x-auto px-6 py-4 md:px-10">
        <ul className="flex items-center gap-8 whitespace-nowrap md:gap-14">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-widest2 text-ink-300"
            >
              <Icon size={14} strokeWidth={1.4} className="text-gold-300" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
