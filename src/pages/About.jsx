import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, Factory, Users } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const milestones = [
  {
    year: "1992",
    title: "Founded in Stuttgart",
    desc: "Artitect Machinery is established by two engineers focused on a single product category — the metal folder.",
  },
  {
    year: "2003",
    title: "First servo-driven double folder",
    desc: "The DF-Pro platform launches, bringing servo precision to bidirectional folding.",
  },
  {
    year: "2014",
    title: "Architectural division",
    desc: "Wide-format machines for façade panels and standing seam roofing become a global standard.",
  },
  {
    year: "2024",
    title: "Lights-out automation",
    desc: "AF-Auto delivers fully automated CNC folding cells for serial production.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality without compromise",
    desc: "Every machine is built and tested at our Stuttgart facility before it leaves the floor.",
  },
  {
    icon: Globe2,
    title: "Global, but personal",
    desc: "Service teams across 47 countries ensure our customers are never more than a call away from expertise.",
  },
  {
    icon: Factory,
    title: "Made by fabricators",
    desc: "Our engineers work alongside operators in real shops, refining every detail of how a folder should feel.",
  },
  {
    icon: Users,
    title: "Long-term partnerships",
    desc: "Many of our customers have run Artitect machines for over twenty years — and counting.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p
              id="about-eyebrow"
              className="eyebrow text-amber-700 mb-5"
            >
              The Artitect studio
            </p>
            <h1
              id="about-title"
              className="font-display text-5xl md:text-7xl font-light text-neutral-900 leading-[1.05]"
            >
              Three decades
              <br />
              <span className="italic text-neutral-700">of folding metal.</span>
            </h1>
            <p
              id="about-subtitle"
              className="mt-8 text-lg text-neutral-600 leading-relaxed max-w-xl"
            >
              We build sheet metal folding machines for the workshops that
              shape the world's buildings, vehicles, and quiet everyday
              objects. Our craft is precision — and the patience required to
              keep refining it.
            </p>
          </div>

          <div className="md:col-span-5">
            <div
              className="aspect-[3/4] bg-neutral-200 border border-neutral-200"
              data-strk-bg-id="about-hero-img-bg-3a91cc"
              data-strk-bg="[about-subtitle] [about-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-neutral-500 mb-5">Our philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
              Make fewer machines.
              <br />
              <span className="italic text-neutral-700">Make them well.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              We don't build everything. We build folders. Double folders,
              sheet metal folders, manual folders, and CNC folding cells —
              and we've spent thirty years getting better at exactly that.
            </p>
            <p>
              Every Artitect machine begins with the same question: how will
              this feel on the ten-thousandth fold of the year? The answer
              shapes the casting, the servo, the touchscreen, and the way the
              beam returns to zero.
            </p>
            <p>
              When you buy from us, you join a long line of fabricators who
              chose precision they could feel — and a partner who would still
              be there decades later.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-neutral-500 mb-4">What we stand for</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-900">
              Four principles, daily.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-neutral-200 p-8 hover:border-neutral-900 transition-colors"
              >
                <v.icon
                  className="w-7 h-7 text-amber-600 mb-6"
                  strokeWidth={1.25}
                />
                <h3 className="font-display text-xl text-neutral-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-neutral-500 mb-4">A short history</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-neutral-900">
              The studio, year by year.
            </h2>
          </div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-10">
            {milestones.map((m) => (
              <div key={m.year} className="border-t border-neutral-300 pt-6">
                <div className="font-display text-3xl text-amber-700 font-light">
                  {m.year}
                </div>
                <h3 className="mt-3 text-lg text-neutral-900 font-medium">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24 text-center">
          <p className="eyebrow text-amber-500 mb-5">Visit the studio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light max-w-3xl mx-auto leading-tight">
            See the machines being built.
          </h2>
          <p className="mt-6 text-stone-300 max-w-xl mx-auto leading-relaxed">
            Tours of our Stuttgart facility are open to qualified buyers.
            Reach out to schedule a visit and meet the engineers behind your
            next folder.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-amber-700 transition-colors"
          >
            Arrange a visit
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
