import { Globe, RotateCcw, Gem, ShieldCheck } from "lucide-react";

const features = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-100/80 border-y border-cream-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-center gap-2.5 py-1"
            >
              <f.icon size={16} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-overline uppercase text-charcoal-600 tracking-[0.08em] whitespace-nowrap">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
