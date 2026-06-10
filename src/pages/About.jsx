import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TIMELINE = [
  {
    year: "2001",
    title: "Founded in Winterthur",
    desc: "Artitect begins life as a small workshop building bespoke folding tooling for Swiss architectural fabricators.",
  },
  {
    year: "2008",
    title: "First servo folder",
    desc: "We launch our first servo-electric sheet metal folding machine, replacing noisy hydraulics with quiet precision.",
  },
  {
    year: "2014",
    title: "The double folder",
    desc: "Our flagship double folding machine debuts, capable of bending in both directions without flipping the workpiece.",
  },
  {
    year: "2026",
    title: "A craft refined",
    desc: "Today we serve fabricators in over 30 countries, with each machine assembled and tested under one roof.",
  },
];

const NUMBERS = [
  { value: "25+", label: "Years of folding" },
  { value: "30", label: "Countries served" },
  { value: "1,200+", label: "Machines installed" },
  { value: "0.05", label: "mm typical bend tolerance" },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-bone pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p
              id="about-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-accent mb-5"
            >
              Our Studio
            </p>
            <h1
              id="about-title"
              className="font-serif text-5xl md:text-7xl text-ink leading-[1.05]"
            >
              The work behind the machines.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-steel leading-relaxed">
              Artitect Machinery is a small Swiss manufacturer building
              precision sheet metal folders, double folders, and metal
              folding machines for studios, architects, and industrial
              fabricators.
            </p>
          </div>
        </div>
      </section>

      {/* Image + story */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-bone border border-mist">
              <img
                alt="Artitect Machinery workshop"
                data-strk-img-id="about-workshop-img-7e2c14"
                data-strk-img="[about-story-desc] [about-story-title] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              Philosophy
            </p>
            <h2
              id="about-story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Make fewer machines. Make them better.
            </h2>
            <p
              id="about-story-desc"
              className="mt-6 text-base text-steel leading-relaxed"
            >
              Every Artitect folding machine is the product of one belief:
              that the best fabrication tools are the ones that quietly
              disappear into the work. We sweat the small things — the
              feeling of a backgauge under your hand, the silence of a
              servo-driven beam, the way a clean bend catches the light.
            </p>
            <p className="mt-4 text-base text-steel leading-relaxed">
              Our machines are designed by fabricators, for fabricators. We
              still test every unit on the same shop floor where it was built.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {NUMBERS.map((n) => (
            <div key={n.label} className="border-t border-paper/30 pt-6">
              <div className="font-serif text-5xl md:text-6xl text-paper">
                {n.value}
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-mist/80">
                {n.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              A quiet history
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Twenty-five years, one discipline.
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {TIMELINE.map((item) => (
              <li key={item.year} className="border-t border-ink pt-6">
                <div className="font-serif text-3xl text-accent">
                  {item.year}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink max-w-3xl mx-auto leading-tight">
            Visit the studio. We'll put the kettle on.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition"
          >
            Get in touch
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
