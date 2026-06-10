import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HomeProcess = () => {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const steps = [
    {
      n: "01",
      title: "Consult",
      text: "We start with your sheet, your throughput, your tolerances. Specifications follow the work — never the other way around.",
    },
    {
      n: "02",
      title: "Engineer",
      text: "Our engineers tailor folding beams, tooling, and control logic to match your application — from architectural panels to HVAC ducting.",
    },
    {
      n: "03",
      title: "Build",
      text: "Each frame is welded, stress-relieved, and machined in-house. Critical components are tested individually before final assembly.",
    },
    {
      n: "04",
      title: "Commission",
      text: "We install, calibrate, and train on-site. Your operators walk away confident on day one.",
    },
  ];

  return (
    <section ref={ref} className="bg-bone py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span id="process-eyebrow" className="text-xs uppercase tracking-widest2 text-accent font-medium">
              The ARTITECT Process
            </span>
          </div>
          <h2 id="process-title" className="mt-5 font-serif font-light text-3xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            From specification
            <br />
            to first fold.
          </h2>
          <p id="process-desc" className="mt-6 text-steel text-[17px] leading-relaxed">
            A folding machine is not a catalogue purchase. It is a long-term
            partner. Our delivery process is designed to make sure the machine
            you receive is exactly the machine your shop needs.
          </p>

          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[4/3] bg-mist border border-silver overflow-hidden">
            <img
              alt="ARTITECT engineering floor"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="home-process-img-3a8c1f"
              data-strk-img="[process-desc] [process-title] precision sheet metal fabrication factory engineers"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-ink/10" />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-silver border border-silver">
            {steps.map((s) => (
              <div key={s.n} className="bg-bone p-7">
                <p className="font-mono text-xs text-accent tracking-widest2">{s.n}</p>
                <h3 className="mt-3 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-steel text-[14px] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
