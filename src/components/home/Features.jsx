import { Cog, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FEATURES = [
  {
    icon: Ruler,
    title: "Sub-millimetre precision",
    body: "Hardened tool-steel beams and ground reference surfaces deliver bend-after-bend accuracy down to ± 0.03 mm.",
  },
  {
    icon: Cog,
    title: "Engineered to last",
    body: "Every welded chassis is stress-relieved and machined as a single block. Designed for decades of three-shift production.",
  },
  {
    icon: Sparkles,
    title: "Calm operator interface",
    body: "Touchscreen controls with a quiet, deliberate UI. No noise, no unnecessary buttons, no learning curve.",
  },
  {
    icon: ShieldCheck,
    title: "Five-year mechanical warranty",
    body: "Backed by a global service network and on-site engineers in 42 countries. Buy once, fold confidently.",
  },
];

const Features = () => {
  return (
    <section className="bg-paper py-20 md:py-28 border-y border-mist">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Artitect"
              title="Industrial machines, designed with intent."
              subtitle="We build sheet metal folders the way fine instruments are built — every component considered, every interaction refined. Power that feels effortless."
            />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border border-mist p-7 bg-bone hover:border-gold transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-ink text-gold mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
