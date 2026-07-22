import { Truck, RefreshCw, Sparkles, Shield } from "lucide-react";
import Container from "@/components/ui/Container";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-bone border-y border-hairline">
      <Container className="py-5 md:py-6">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-espresso/85"
            >
              <item.icon size={14} strokeWidth={1.3} className="text-brass" />
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
