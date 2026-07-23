import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-16 bg-ivory">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Our Story</p>
            <h1
              id="about-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-espresso font-light leading-[1.02]"
            >
              Quiet jewelry,<br />made forever.
            </h1>
            <p
              id="about-subtitle"
              className="mt-6 text-base sm:text-lg text-taupe font-light leading-relaxed"
            >
              Velmora was founded in 2024 with a simple belief — demi-fine jewelry
              should feel like an heirloom from the very first wear. Every piece is
              designed in our studio, gold-plated in 18K, and made to outlast the season.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100">
        <Container className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
          <StrkImageLoader className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px] overflow-hidden bg-ivory-200 order-1">
            <div
              className="absolute inset-0"
              data-strk-bg-id="about-image-3b9e21"
              data-strk-bg="[about-body-2] [about-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1100"
              aria-hidden="true"
            />
          </StrkImageLoader>
          <div className="flex items-center order-2 px-2 sm:px-6 lg:px-12 py-16 lg:py-24">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-light mb-6">
                Made by hand,<br />finished with care.
              </h2>
              <p
                id="about-body-2"
                className="text-[15px] sm:text-base leading-relaxed text-taupe font-light"
              >
                We work with a small atelier of goldsmiths who plate every piece in 18K over a
                hypoallergenic base. The result is jewelry that feels like solid gold — at a
                price you can wear every day, and gift without hesitation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 bg-ivory">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 text-center">
            {[
              { k: "100%", v: "Hypoallergenic" },
              { k: "18K", v: "Gold Plated" },
              { k: "30", v: "Day Returns" },
              { k: "1%", v: "For The Planet" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-serif text-5xl sm:text-6xl text-espresso font-light">{s.k}</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-taupe">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center h-12 px-8 bg-espresso text-ivory text-xs uppercase tracking-widest font-medium hover:bg-espresso-200 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
