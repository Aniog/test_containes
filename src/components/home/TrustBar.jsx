import { Truck, Rotate3D, Sparkles, ShieldCheck } from "lucide-react";

const trusts = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: Rotate3D, text: "30-Day Returns" },
  { icon: Sparkles, text: "18K Gold Plated" },
  { icon: ShieldCheck, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-border bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {trusts.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2"
            >
              <item.icon className="w-4 h-4 text-velmora-gold shrink-0" />
              <span className="font-sans text-xs text-velmora-text-secondary">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}