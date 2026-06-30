import React from "react";
import { Shield, Truck, RotateCcw, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 md:px-12 lg:px-16">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className="h-3.5 w-3.5 text-primary" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/60">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}