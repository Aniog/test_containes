import { ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Sparkles, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-[#E5DED5] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-3.5 border-r border-[#E5DED5] last:border-r-0 last:border-r-0 even:border-r-0 md:even:border-r"
            >
              <item.icon className="w-4 h-4 text-[#B8943C] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-[#6B6358] font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}