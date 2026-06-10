import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const stats = [
  { v: "1998", k: "Founded" },
  { v: "42", k: "Countries served" },
  { v: "1,200+", k: "Machines in service" },
  { v: "<48h", k: "Avg. service response" },
];

const values = [
  {
    title: "Precision is a discipline.",
    text: "We obsess over the millimetre. Tooling is ground in-house, frames are stress-relieved, and every machine is run-tested before it leaves our floor.",
  },
  {
    title: "Endurance over excitement.",
    text: "Our machines aren't redesigned every year for marketing reasons. They evolve only when an evolution is justified — and only when it serves the operator.",
  },
  {
    title: "Honest engineering.",
    text: "We tell customers what their application actually needs — even when it means a smaller machine, a smaller invoice, and a longer relationship.",
  },
];

const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-ink text-bone pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
              Our Story
            </span>
          </div>
          <h1 id="about-hero-title" className="mt-6 font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Twenty-five years of folds, one philosophy.
          </h1>
          <p id="about-hero-desc" className="mt-8 text-silver text-[17px] md:text-lg max-w-2xl leading-relaxed">
            ARTITECT MACHINERY was founded by a small team of fabrication
            engineers who believed folding machines should outlast the
            workshops that bought them. Today, we still build that way.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bone py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-mist border border-silver overflow-hidden relative">
              <img
                alt="ARTITECT engineering portrait"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="about-portrait-img-5e2c1a"
                data-strk-img="[about-story-desc] [about-story-title] master engineer in metal workshop folding machine portrait"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
                Heritage
              </span>
            </div>
            <h2 id="about-story-title" className="mt-5 font-serif font-light text-3xl md:text-5xl leading-[1.1] tracking-tight text-ink">
              A workshop, a sheet of steel, a question worth answering.
            </h2>
            <div id="about-story-desc" className="mt-8 space-y-6 text-steel text-[17px] leading-relaxed">
              <p>
                In 1998, three engineers in a small Swiss town set themselves a
                quiet challenge: design a sheet metal folder that an apprentice
                could master in a morning, and a master could rely on for a
                career. The first ATS prototype shipped to a local roofing
                fabricator that same year. It still folds today.
              </p>
              <p>
                Twenty-five years later, our customers still ring us up
                asking for the same thing — a folding machine that quietly
                does its job, year after year. We still build for that
                customer first.
              </p>
              <p>
                Our facility now spans 18,000 square metres, with welding,
                machining, painting, and assembly all kept under one roof.
                Nothing critical is outsourced. Nothing important is rushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-mist py-20 md:py-28 border-y border-silver">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-silver border border-silver">
          {stats.map((s) => (
            <div key={s.k} className="bg-bone p-8 md:p-10 text-center">
              <p className="font-serif text-4xl md:text-6xl text-ink leading-none">{s.v}</p>
              <p className="mt-4 text-xs uppercase tracking-widest2 text-steel">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-bone py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
              What we believe
            </span>
          </div>
          <h2 className="mt-5 font-serif font-light text-3xl md:text-5xl leading-[1.1] tracking-tight text-ink max-w-3xl">
            Three principles. Every machine. Every day.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-silver border border-silver">
            {values.map((v, i) => (
              <div key={v.title} className="bg-bone p-8 md:p-10">
                <p className="font-mono text-xs text-accent tracking-widest2">
                  Principle 0{i + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-ink leading-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-steel text-[15px] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop image */}
      <section className="bg-bone pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="relative aspect-[16/9] bg-ink overflow-hidden border border-silver">
            <img
              alt="ARTITECT MACHINERY workshop"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="about-workshop-img-9d4f0a"
              data-strk-img="[about-workshop-caption] modern industrial sheet metal manufacturing workshop interior wide angle"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <p id="about-workshop-caption" className="mt-4 text-xs uppercase tracking-widest2 text-steel font-mono">
            Our 18,000 m² assembly facility — Zürich, Switzerland.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
