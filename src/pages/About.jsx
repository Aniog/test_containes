import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const VALUES = [
  {
    title: "Slow by design",
    body:
      "We design in small, considered drops. No seasons, no rush — every piece earns its place in the collection.",
  },
  {
    title: "Demi-fine, fine feeling",
    body:
      "18K gold plating over hypoallergenic, nickel-free bases. The weight, the finish, the way it sits — without the fine-jewelry mark-up.",
  },
  {
    title: "Women-founded, family-made",
    body:
      "Founded by Anaïs Velmora in 2021. Made with family-run workshops in Porto and Athens.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Hero */}
      <section className="bg-ivory-100">
        <div className="container-x pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h1 className="h-display mt-4 text-display-lg text-espresso-900 text-balance">
                Quiet jewelry, made slowly,
                <span className="block italic text-gold-600">to be lived in.</span>
              </h1>
              <p className="mt-6 text-espresso-700 text-[16px] leading-relaxed">
                Velmora was founded in 2021 around a small idea: that the most
                treasured pieces in your jewelry box shouldn't be reserved for
                best. We make demi-fine jewelry designed for the everyday — the
                commute, the dinner, the third coffee.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial image */}
      <section className="container-x">
        <Reveal>
          <div className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden bg-ivory-200">
            <img
              alt="Inside the Velmora studio — light through linen"
              data-strk-img-id="about-editorial"
              data-strk-img="[about-values] [about-heading] [about-eyebrow]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section
        id="materials"
        className="bg-ivory-50 border-y border-hairline"
        aria-labelledby="values-heading"
      >
        <div className="container-x py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <p id="about-eyebrow" className="eyebrow">What we believe</p>
            <h2 id="values-heading" className="h-display mt-3 text-display-md text-espresso-900">
              Three small promises.
            </h2>
          </Reveal>
          <div id="about-values" className="mt-14 grid md:grid-cols-3 gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold-600">
                  0{i + 1}
                </p>
                <h3 className="h-display mt-3 text-2xl text-espresso-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-espresso-700 leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-ivory-100">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="h-display text-display-md text-espresso-900">
              What goes into a piece of Velmora.
            </h2>
            <p className="mt-5 text-espresso-700 leading-relaxed max-w-xl">
              We work with recycled brass and sterling silver bases, finished
              with a thick layer of 18K gold plating. Every piece is
              hypoallergenic, nickel-free, lead-free, and tarnish-resistant.
              The kind of jewelry you can wear in the shower, sleep in, and
              hand down.
            </p>
            <Link to="/shop" className="btn-outline mt-8">Shop the collection</Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-4">
              {[
                ["18K", "Gold plating"],
                ["0", "Nickel, lead, cadmium"],
                ["100%", "Hypoallergenic bases"],
                ["30d", "Free returns"],
              ].map(([k, v]) => (
                <li key={v} className="bg-ivory-50 border border-hairline p-6">
                  <p className="font-serif text-3xl text-gold-600">{k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
                    {v}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
