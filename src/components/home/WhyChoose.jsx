import { Ruler, Gauge, Cpu, Wrench } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Architectural precision",
    desc: "Repeatability to ±0.05 mm so the seam disappears into the design.",
  },
  {
    icon: Cpu,
    title: "Servo-electric drives",
    desc: "Quieter shops, lower energy bills, and consistent torque across every fold.",
  },
  {
    icon: Gauge,
    title: "Faster cycle times",
    desc: "Double folders that bend up and down in a single pass — no re-fixturing.",
  },
  {
    icon: Wrench,
    title: "Serviceable for decades",
    desc: "Modular construction and global support keep your folder productive for a generation.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-paper border-y border-bone-soft py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              Why ARTITECT
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight leading-[1.1]">
              A folder should disappear into the work it makes.
            </h2>
            <p className="mt-8 text-base text-steel leading-relaxed max-w-md">
              Every ARTITECT machine is designed by the people who use it.
              That is why our double folders, sheet metal folders and metal
              folder machines feel obvious in the hand — and exact in the
              fold.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="border-t border-ink/10 pt-6">
                  <Icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.25} />
                  <h3 className="font-serif text-xl text-ink mb-3">{f.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
