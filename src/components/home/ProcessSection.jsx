import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ProcessSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      n: "01",
      title: "Consult",
      desc: "We start with your material, tolerances and floor plan. No two folding shops are alike.",
    },
    {
      n: "02",
      title: "Specify",
      desc: "Choose bending length, drive type, automation and tooling — we configure the machine around the work.",
    },
    {
      n: "03",
      title: "Build",
      desc: "Each ARTITECT folder is hand-assembled and laser-calibrated in our New York workshop.",
    },
    {
      n: "04",
      title: "Install & support",
      desc: "On-site installation, operator training and a decade-long service relationship.",
    },
  ];

  return (
    <section ref={containerRef} className="bg-bone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p id="process-eyebrow" className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              Process
            </p>
            <h2 id="process-title" className="font-serif text-4xl md:text-5xl text-ink tracking-tight leading-[1.1]">
              From first sketch to first fold.
            </h2>
            <div className="mt-10 aspect-[4/3] overflow-hidden bg-bone-soft">
              <img
                alt="Engineer adjusting a sheet metal folding machine"
                className="w-full h-full object-cover"
                data-strk-img-id="process-engineer-img-6e21d4"
                data-strk-img="[process-title] [process-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-12">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-8 border-t border-ink/10 pt-8">
                  <div className="font-serif text-3xl text-accent">{s.n}</div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink mb-3">{s.title}</h3>
                    <p className="text-base text-steel leading-relaxed max-w-lg">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
