import { CheckCircle2, Wrench, Globe2, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Built for fabricators",
    body: "We design with the operator in mind — clear controls, fast setup, predictable results.",
  },
  {
    icon: Globe2,
    title: "Global reach",
    body: "Installed in 40+ countries with regional service engineers and spare-parts warehouses.",
  },
  {
    icon: ShieldCheck,
    title: "Quality assured",
    body: "Every machine is calibrated and sample-tested before shipping. ISO 9001 certified.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
              About Artitect
            </p>
            <h2
              id="about-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
            >
              Twenty-five years of engineering excellence in metal folding.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-[#3D4A5C]">
              ARTITECT MACHINERY began with a single idea: that sheet metal folding
              should be precise, repeatable, and accessible to every fabrication
              shop. Today we deliver complete folding solutions — from compact
              double folders to fully automated metal folding machines — to
              customers in over forty countries.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-[#3D4A5C]">
              Every machine we build carries our promise: engineered frames,
              multi-axis CNC control, universal tooling, and the kind of
              after-sale support that keeps your line running.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Engineered & assembled in-house",
                "5-year structural warranty",
                "24/7 remote service",
                "Operator training included",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-[#0E1726]"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-[#1B3A6B]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group rounded-xl border border-[#E5E7EB] bg-white p-8 hover:border-[#1B3A6B] hover:shadow-md transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#E8EEF5] text-[#1B3A6B] group-hover:bg-[#1B3A6B] group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#0E1726]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3D4A5C]">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}