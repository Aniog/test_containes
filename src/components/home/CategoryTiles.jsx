import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

const tiles = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Studs, drops, cuffs — your daily edit.",
    query: "gold earrings collection flat lay on linen, soft natural light",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Layered, considered, quiet.",
    query: "gold necklaces collection layered on neutral background",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "The everyday signature.",
    query: "gold huggie hoop earrings still life on cream background",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-4">Shop By Category</p>
          <h2 id="category-title" className="font-serif text-4xl sm:text-5xl text-espresso font-light">
            Find your piece
          </h2>
        </div>

        <StrkImageLoader className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-ivory-200"
            >
              <div
                className="absolute inset-0 transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                data-strk-bg-id={`cat-${tile.id}-bg`}
                data-strk-bg={tile.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="900"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/40 group-hover:to-espresso/60 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-ivory flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light leading-tight">
                    {tile.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ivory/80 max-w-[200px] font-light opacity-90">
                    {tile.tagline}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/70 text-ivory transition-transform duration-500 ease-smooth group-hover:rotate-45">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </StrkImageLoader>
      </Container>
    </section>
  );
}
