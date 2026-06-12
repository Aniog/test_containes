import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";

const VALUES = [
  {
    n: "01",
    title: "Precision is a discipline",
    body: "We refuse to round-off tolerances. Our standard is a third of what most folders consider acceptable.",
  },
  {
    n: "02",
    title: "Elegance in the machine",
    body: "Function leads form, but form is never an afterthought. Every Artitect machine should be calm to look at and calm to use.",
  },
  {
    n: "03",
    title: "Built to outlast trends",
    body: "We don't follow seasonal industrial fashion. We build folders that will still be working in your shop in thirty years.",
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative bg-ink text-bone overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="about-hero-bg-c812aa"
          data-strk-bg="[about-hero-title] [about-hero-subtitle] artisan engineer hands on metal folder workshop"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow light>About Artitect</Eyebrow>
          <h1
            id="about-hero-title"
            className="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl text-bone max-w-3xl"
          >
            Quietly obsessed with the way metal folds.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-6 text-mist max-w-2xl leading-relaxed text-base md:text-lg"
          >
            For more than two decades, Artitect Machinery has built sheet metal
            folders for workshops that treat their craft seriously — from
            architectural facade specialists to high-volume HVAC fabricators.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our story"
              title="Founded in Udine, refined in workshops worldwide."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-steel text-base md:text-[17px] leading-relaxed">
            <p>
              Artitect Machinery began in 1999 in a small workshop in Udine,
              northern Italy. Our founder, a third-generation toolmaker,
              believed that the folding machine — the quiet workhorse of every
              fabrication shop — deserved the same care given to fine
              instruments.
            </p>
            <p>
              Today, we design and manufacture a full range of double folding
              machines, sheet metal folders and CNC metal folder machines.
              Every unit is still assembled by hand in our Udine workshop, and
              every unit ships with a precision certificate signed by the
              engineer who built it.
            </p>
            <p>
              We sell directly, and we install directly. We answer the phone
              when our customers call. And we keep our machines — even the
              early ones — running for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper border-y border-mist py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Our values"
            title="Three principles that guide every machine."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-mist border border-mist">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-paper p-8 md:p-10">
                <p className="font-serif text-gold text-3xl md:text-4xl">
                  {v.n}
                </p>
                <h3 className="mt-5 font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop image strip */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-mist border border-mist">
            <img
              alt="Artitect workshop in Udine"
              data-strk-img-id="about-workshop-img-9912ee"
              data-strk-img="[about-workshop-title] [about-workshop-desc] italian metalwork workshop machine assembly"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Inside the workshop</Eyebrow>
            <h2
              id="about-workshop-title"
              className="mt-5 font-serif font-medium tracking-tight text-3xl md:text-4xl text-ink"
            >
              Hand-built. Machine-precise.
            </h2>
            <p
              id="about-workshop-desc"
              className="mt-5 text-steel leading-relaxed"
            >
              Every Artitect folder spends an average of 11 days in our
              workshop. Frames are stress-relieved, beams are ground to the
              micron, and every machine is run through a full bend-cycle test
              against a master gauge before it ever leaves our floor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
