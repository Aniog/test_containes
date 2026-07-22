import { Link } from "react-router-dom";
import { useStrkImages } from "@/lib/use-strk-images.js";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function About() {
  const containerRef = useStrkImages();

  return (
    <div ref={containerRef}>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-10 md:pt-36">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            Our Story
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            Made slowly, <span className="italic">worn daily</span>
          </h1>
          <p className="mt-6 leading-relaxed text-taupe">
            Velmora Fine Jewelry was founded on a simple belief: the pieces we
            wear closest should be made with the most care. We design demi-fine
            jewelry in warm 18k gold — plated generously over recycled metals,
            hand-finished in small batches, and priced so that quiet luxury is
            an everyday ritual.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10">
        <img
          alt="Velmora atelier workbench"
          data-strk-img-id="about-atelier-01"
          data-strk-img="jeweler workbench tools gold rings atelier warm ambient light"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src={SVG_PLACEHOLDER}
          className="aspect-[4/3] w-full object-cover"
        />
        <div>
          <h2 className="font-serif text-3xl font-medium text-ink">
            The <span className="italic">Atelier</span>
          </h2>
          <p className="mt-5 leading-relaxed text-taupe">
            Every Velmora piece begins as a sketch at our studio bench. We work
            with a small team of master jewelers who plate, polish, and set
            each stone by hand — because machines can't feel the difference
            between good and exceptional.
          </p>
          <p className="mt-4 leading-relaxed text-taupe">
            Our gold is plated to a thickness designed for daily wear, over
            hypoallergenic, nickel-free bases that love even sensitive skin.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-10 md:py-24">
          {[
            {
              title: "Small Batches",
              text: "We produce in limited runs to keep quality high and waste low.",
            },
            {
              title: "Honest Materials",
              text: "18k gold plating over recycled brass and sterling silver — always nickel-free.",
            },
            {
              title: "Made to Keep",
              text: "Heirloom-feeling pieces with a 1-year craftsmanship warranty.",
            },
          ].map((v) => (
            <div key={v.title} className="border-t border-gold/40 pt-6">
              <h3 className="font-serif text-2xl font-medium text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24">
        <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl">
          Begin your <span className="italic">collection</span>
        </h2>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-luxe text-ivory transition-colors hover:bg-gold-dark"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
