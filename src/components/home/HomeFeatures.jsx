import { Gauge, Layers, Cpu, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Layers,
    title: "Twin-beam Engineering",
    text: "Our double folding architecture lets the operator fold up and down without flipping the sheet — saving time, reducing handling damage, and protecting tight tolerances.",
  },
  {
    icon: Gauge,
    title: "Industrial Accuracy",
    text: "Closed-loop servo positioning, ground tooling, and stress-relieved frames hold ±0.03° across full working width — production after production.",
  },
  {
    icon: Cpu,
    title: "Operator-First Controls",
    text: "Touchscreen HMI with 2D programming, offline CAD import, and visual fold sequencing. Powerful for the engineer, friendly for the apprentice.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Outlast",
    text: "Hardened folding beams, sealed bearings, and a serviceable design philosophy. Decades of service life is the baseline, not the boast.",
  },
];

const HomeFeatures = () => {
  return (
    <section className="bg-graphite text-bone py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Why ARTITECT"
          title="Engineering that sits on the shop floor — not on a brochure."
          subtitle="Every machine we build is shaped by fabricators who run them daily. The result is hardware that feels precise, predictable, and honest."
          light
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-graphite p-8 md:p-10 hover:bg-ink transition-colors"
              >
                <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                <h3 className="mt-8 font-serif text-2xl text-bone leading-tight">
                  {f.title}
                </h3>
                <p className="mt-4 text-silver text-[15px] leading-relaxed">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
