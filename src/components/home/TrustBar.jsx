import { Truck, RefreshCcw, Gem, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Truck,
    title: "Free Worldwide Shipping",
    sub: "On orders over $80",
  },
  {
    icon: RefreshCcw,
    title: "30-Day Returns",
    sub: "On unworn pieces",
  },
  {
    icon: Gem,
    title: "18K Gold Plated",
    sub: "Tarnish-resistant finish",
  },
  {
    icon: ShieldCheck,
    title: "Hypoallergenic",
    sub: "Nickel and lead free",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-ink text-ivory"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <ul className="grid grid-cols-2 gap-y-3 py-4 md:grid-cols-4 md:gap-y-0 md:py-3">
          {ITEMS.map(({ icon: Icon, title, sub }) => (
            <li
              key={title}
              className="flex items-center justify-center gap-3 py-2 text-center md:justify-start md:text-left"
            >
              <Icon
                className="hidden h-4 w-4 text-gold-soft md:block"
                strokeWidth={1.5}
              />
              <div>
                <p className="cta-caps text-[10.5px] text-ivory">{title}</p>
                <p className="mt-0.5 text-[11px] text-ivory/55 tracking-wide">
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
