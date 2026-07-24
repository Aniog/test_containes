import { Truck, RefreshCw, CircleDot, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: CircleDot, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 py-4 md:py-5"
            >
              <Icon size={16} className="text-accent" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-center md:text-left font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
