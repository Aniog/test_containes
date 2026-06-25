import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const values = [
  {
    title: "Precision is a discipline",
    body: "We don't chase headline numbers. We chase the discipline of producing the same bend, on the same machine, at the end of a long Friday shift.",
  },
  {
    title: "Engineering as restraint",
    body: "The best machine is the one you don't think about. We design out complexity so your operators can focus on the part, not the panel.",
  },
  {
    title: "Built for the long arc",
    body: "An ARTITECT folder isn't a five-year purchase. It's a fifteen-year partner — supported by direct engineering and a global parts network.",
  },
];

const timeline = [
  { year: "2008", text: "Founded in Sheffield by a team of toolmakers and CNC engineers." },
  { year: "2012", text: "Launch of the SF series — our first commercially available sheet metal folder." },
  { year: "2016", text: "Introduction of double folding technology with the AF platform." },
  { year: "2021", text: "MF-XL large format machines installed on three continents." },
  { year: "2026", text: "Over forty countries served. The bend continues." },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
              About ARTITECT
            </p>
            <h1
              id="about-title"
              className="mt-6 font-display text-5xl md:text-6xl tracking-tight text-ink leading-[1.05]"
            >
              Quietly building the world's most considered folders.
            </h1>
            <p
              id="about-subtitle"
              className="mt-8 text-graphite leading-relaxed text-lg"
            >
              ARTITECT MACHINERY was founded by a small group of toolmakers
              who believed sheet metal folding deserved the same attention to
              detail as fine architecture. Today, our machines stand in
              workshops, factories and panel lines across more than forty
              countries.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-brass hidden md:block" />
            <div className="relative aspect-[4/5] bg-mist overflow-hidden rounded-sm">
              <img
                alt="ARTITECT engineering workshop"
                data-strk-img-id="about-hero-img-7c2b8a"
                data-strk-img="[about-subtitle] [about-title] industrial metal workshop precision engineering"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper border-y border-mist py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
              Our values
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
              Three principles, every machine.
            </h2>
          </div>
          <div className="grid gap-px bg-mist md:grid-cols-3">
            {values.map((v, idx) => (
              <div key={v.title} className="bg-paper p-8 md:p-10">
                <p className="font-display text-brass text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-4 text-graphite leading-relaxed text-sm">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bone py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            A short history
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
            From workshop to world.
          </h2>

          <ol className="mt-16 relative border-l border-mist">
            {timeline.map((item) => (
              <li key={item.year} className="pl-10 pb-12 last:pb-0 relative">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 bg-brass rounded-full" />
                <p className="font-display text-3xl text-ink">{item.year}</p>
                <p className="mt-3 text-graphite leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bp-grid-dark opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Visit our workshop. Bend a sample.
          </h2>
          <p className="mt-6 text-paper/75 leading-relaxed">
            We host on-site demonstrations at our Sheffield facility and at
            partner locations across Europe, the Middle East and Asia.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-paper text-ink hover:bg-mist rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Arrange a visit
          </Link>
        </div>
      </section>
    </div>
  );
}
