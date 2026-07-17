import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function CategoryTiles() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="container-content py-20 md:py-28"
    >
      <StrkImage>
        <ScrollReveal>
          <div className="mb-10 flex flex-col items-start gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Shop By Category</p>
              <h2
                id="categories-heading"
                className="mt-3 font-serif text-4xl text-ink md:text-5xl"
              >
                Find Your Forever
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Three quiet, considered categories. Pick one — or layer across all three.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid gap-5 md:grid-cols-3 md:gap-7">
            {categories.map((cat) => {
              const titleId = `cat-${cat.id}-title`;
              const descId = `cat-${cat.id}-desc`;
              return (
                <Link
                  key={cat.id}
                  to={`/shop?category=${cat.id}`}
                  className="group relative block aspect-[3/4] overflow-hidden bg-bone"
                >
                  <img
                    data-strk-img-id={`cat-tile-${cat.id}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/0 via-ink-deep/10 to-ink-deep/55 transition-opacity duration-300 group-hover:via-ink-deep/30" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory">
                    <div>
                      <h3
                        id={titleId}
                        className="font-serif text-3xl leading-none md:text-4xl"
                      >
                        {cat.name}
                      </h3>
                      <p
                        id={descId}
                        className="mt-2 max-w-[26ch] text-xs leading-relaxed text-ivory/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        {cat.description}
                      </p>
                    </div>
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center border border-ivory/70 text-ivory opacity-0 transition-all duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </StrkImage>
    </section>
  );
}

export default CategoryTiles;
