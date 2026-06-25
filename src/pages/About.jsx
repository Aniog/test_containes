import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/shared/PageHeader";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const values = [
    {
      n: "Built by folders",
      d: "Our engineers came from sheet-metal shops. The controls feel familiar because we built the ones we wished we had.",
    },
    {
      n: "Quietly engineered",
      d: "Servo-electric drives, modular tooling, and steel frames that outlast the studios they live in.",
    },
    {
      n: "Honestly priced",
      d: "No annual licence fees, no proprietary consumables. You buy a folder once and own it.",
    },
  ];

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Our story"
        title="A workshop that builds the workshop's tools."
        description="ARTITECT Machinery began in 1994 as a two-person folding shop in Brooklyn. Three decades later, our folders are still designed by people who have spent a long day with a sheet of steel."
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-bone-soft">
            <img
              alt="ARTITECT Machinery workshop floor"
              className="w-full h-full object-cover"
              data-strk-img-id="about-workshop-img-4a2b8c"
              data-strk-img="[about-workshop-desc] [about-workshop-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              The workshop
            </p>
            <h2 id="about-workshop-title" className="font-serif text-3xl md:text-5xl text-ink tracking-tight leading-[1.1]">
              Forty engineers, one folder at a time.
            </h2>
            <p id="about-workshop-desc" className="mt-6 text-base text-steel leading-relaxed">
              We do not manufacture by quota. Each ARTITECT folder is
              hand-assembled on a single bay by the same small team — frame to
              control panel to laser calibration. The result is a machine that
              feels intentional, because it is.
            </p>
            <p className="mt-5 text-base text-steel leading-relaxed">
              Today we ship to 42 countries and support every machine we have
              ever built. Some of our first folders, from 1996, are still in
              daily production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper border-y border-bone-soft py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
            What we believe
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight max-w-3xl">
            Folders should be simple to use and serious to live with.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={v.n} className="border-t border-ink/10 pt-6">
                <div className="font-serif text-2xl text-accent mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl text-ink mb-3">{v.n}</h3>
                <p className="text-sm text-steel leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { k: "1994", v: "Founded in Brooklyn" },
            { k: "42", v: "Countries served" },
            { k: "3,200", v: "Folders in production" },
            { k: "10 yr", v: "Standard service contract" },
          ].map((s) => (
            <div key={s.v} className="border-t border-ink/15 pt-6">
              <div className="font-serif text-4xl md:text-5xl text-ink">{s.k}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-steel mt-3">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
