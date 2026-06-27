import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";

const trusts = [
  { icon: "Truck", text: "Free Worldwide Shipping" },
  { icon: "RotateCcw", text: "30-Day Returns" },
  { icon: "ShieldCheck", text: "18K Gold Plated" },
  { icon: "Heart", text: "Hypoallergenic" },
];

const iconMap = {
  Truck: <Truck className="w-4 h-4" />,
  RotateCcw: <RotateCcw className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
};

export default function TrustBar() {
  return (
    <div className="bg-foreground py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trusts.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-white/80 text-xs tracking-wider uppercase"
            >
              {iconMap[item.icon]}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}