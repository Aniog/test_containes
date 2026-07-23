import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PLACEHOLDER_IMG } from "@/data/products";
import Reveal from "@/components/ui/Reveal";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            The Collections
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-espresso md:text-5xl">
            Shop by Category
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 100}>
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-espresso"
              >
                <img
                  src={PLACEHOLDER_IMG}
                  alt={cat.label}
                  loading="lazy"
                  data-strk-img-id={`category-${cat.id}-img`}
                  data-strk-img={`[category-${cat.id}-blurb] [category-${cat.id}-label] elegant gold jewelry editorial photography`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3
                        id={`category-${cat.id}-label`}
                        className="font-display text-3xl font-medium uppercase tracking-[0.18em] text-cream"
                      >
                        {cat.label}
                      </h3>
                      <p
                        id={`category-${cat.id}-blurb`}
                        className="mt-2 max-w-[240px] text-sm leading-relaxed text-cream/0 transition-all duration-500 group-hover:text-cream/85"
                      >
                        {cat.blurb}
                      </p>
                    </div>
                    <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
