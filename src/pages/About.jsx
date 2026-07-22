import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const milestones = [
  {
    year: "2019",
    title: "The first sketch",
    body: "Founder Lena Voss draws the original Vivid Aura cuff on a Lufthansa napkin. Gold-plated brass, single crystal, hand-finished.",
  },
  {
    year: "2021",
    title: "A studio in Lisbon",
    body: "We open a nine-person atelier in Alfama. Every piece is hand-finished here, in small batches, by a team we know by name.",
  },
  {
    year: "2023",
    title: "First flagship",
    body: "Our first retail space opens in Los Angeles. The Royal Heirloom Set is named one of Vogue's 'quietest luxuries of the year'.",
  },
  {
    year: "2026",
    title: "Worldwide, still small",
    body: "We ship to 47 countries. We still plate heavy, plate twice, and polish by hand. Thank you for being here.",
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <main ref={ref} className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-ivory pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial">
          <p className="eyebrow mb-5">Our story</p>
          <h1 className="display-1 text-balance max-w-3xl">
            Quiet luxury, made in <em className="font-serif italic">small batches</em>.
          </h1>
          <p className="mt-8 max-w-xl text-[16px] md:text-[17px] text-ink-muted leading-[1.85] font-sans font-light">
            Velmora is a demi-fine gold jewelry brand, started in 2019 by a
            designer who wanted jewelry she could actually wear. We plate
            heavy. We plate twice. We polish by hand. We believe the most
            beautiful pieces are the ones that quietly live with you.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand">
            <img
              alt="Atelier in Lisbon"
              data-strk-img-id="about-hero"
              data-strk-img="[about-hero-title] atelier bench hands making jewelry"
              data-strk-img-ratio="21x9"
              data-strk-img-width="1600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <p id="about-hero-title" className="sr-only">Atelier in Lisbon</p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                title: "Heavy-plated",
                body: "Our 18K gold plating is 2.5x industry standard. We plate, then we plate again. It's why our pieces don't quit.",
              },
              {
                title: "Hand-finished",
                body: "Every piece is touched by a hand — cast, set, polished, packed — by our nine-person atelier in Lisbon.",
              },
              {
                title: "Worn, not stored",
                body: "We design for living. Hypoallergenic, tarnish-resistant, water-friendly. Pieces made to move with you.",
              },
            ].map((v) => (
              <article key={v.title} className="border-t border-ink pt-6">
                <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-ink-muted font-sans font-light">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial">
          <p className="eyebrow mb-5">Milestones</p>
          <h2 className="display-2 text-balance max-w-2xl mb-12 md:mb-16">
            Seven years, still small.
          </h2>
          <ol className="space-y-12 md:space-y-16">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-b border-hairline pb-12 md:pb-16 last:border-0"
              >
                <div className="md:col-span-2">
                  <p className="font-serif text-3xl md:text-4xl text-accent">
                    {m.year}
                  </p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.8] text-ink-muted font-sans font-light">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-editorial py-20 md:py-28 text-center">
          <h2 className="display-2 text-balance max-w-2xl mx-auto">
            See what we're making.
          </h2>
          <div className="mt-8">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
