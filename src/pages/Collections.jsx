import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

const collectionQueries = {
  earrings: "gold earrings collection on neutral linen, still life",
  necklaces: "delicate gold necklaces layered on linen background",
  huggies: "gold huggie hoop earrings on cream background",
  sets: "gold jewelry gift set in cream gift box with ribbon",
};

export default function Collections() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-16 bg-ivory">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Collections</p>
            <h1
              id="collections-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-espresso font-light leading-[1.02]"
            >
              The Velmora Edit
            </h1>
            <p
              id="collections-subtitle"
              className="mt-5 text-sm sm:text-base text-taupe"
            >
              Four considered edits, each made to be worn together.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 bg-ivory">
        <Container>
          <StrkImageLoader className="grid md:grid-cols-2 gap-6">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/shop?category=${c.id}`}
                className="group relative block aspect-[4/3] overflow-hidden bg-ivory-200"
              >
                <div
                  className="absolute inset-0 transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                  data-strk-bg-id={`collection-${c.id}`}
                  data-strk-bg={collectionQueries[c.id] || c.name}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="1100"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-ivory flex items-end justify-between">
                  <div>
                    <h2 className="font-serif text-4xl sm:text-5xl font-light">{c.name}</h2>
                    <p className="mt-2 text-sm text-ivory/80 max-w-xs font-light">{c.tagline}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ivory/70 transition-transform duration-500 ease-smooth group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </StrkImageLoader>
        </Container>
      </section>
    </>
  );
}
