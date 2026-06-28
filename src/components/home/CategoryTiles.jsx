import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
            Discover
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-velmora-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden bg-velmora-bone"
            >
              <div className="relative aspect-[3/4] w-full">
                <img
                  alt={cat.label}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.blurbId}] [${cat.titleId}] gold jewelry editorial warm tones`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width={900}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/55 via-velmora-ink/0 to-velmora-ink/0 transition-opacity duration-500 group-hover:from-velmora-ink/70" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-3xl text-velmora-cream md:text-4xl"
                  >
                    {cat.label}
                  </h3>
                  <p
                    id={cat.blurbId}
                    className="mt-1.5 text-[13px] text-velmora-cream/85"
                  >
                    {cat.blurb}
                  </p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.26em] text-velmora-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
