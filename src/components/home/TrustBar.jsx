import { Truck, RotateCcw, Sparkles, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-bone border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-5">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 text-espresso"
            >
              <Icon size={16} strokeWidth={1.25} className="text-gold shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
