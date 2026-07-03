import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { useStrkImages } from "@/lib/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CategoryTiles() {
  const containerRef = useStrkImages([]);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest3 text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl uppercase tracking-widest2 text-cream md:text-3xl"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">
                  {cat.description}
                </p>
                <span className="mt-3 inline-block font-sans text-[11px] uppercase tracking-widest2 text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
