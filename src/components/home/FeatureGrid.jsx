import { Gem, ShieldCheck, Gift, Leaf } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "18k Gold Plated",
    body: "A thick, long-wearing gold finish over premium brass for a warm, luminous glow.",
  },
  {
    icon: ShieldCheck,
    title: "Hypoallergenic",
    body: "Nickel-free and crafted for sensitive skin so you can wear them comfortably all day.",
  },
  {
    icon: Gift,
    title: "Gift-Ready Packaging",
    body: "Every order arrives in a Velmora pouch or box — ready to give or treasure.",
  },
  {
    icon: Leaf,
    title: "Mindfully Made",
    body: "Small-batch production with recycled metals and plastic-free shipping materials.",
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
            The Velmora Promise
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Made to Last, Designed to Love
          </h2>
        </div>

        <div className="grid gap-8 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <feature.icon
                size={28}
                className="mx-auto mb-4 text-gold md:mx-0"
                strokeWidth={1.2}
              />
              <h3 className="font-serif text-lg uppercase tracking-widest">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
