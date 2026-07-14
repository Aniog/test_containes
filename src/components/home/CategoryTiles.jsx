import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import ImageFrame from "@/components/ui/ImageFrame";

const QUERIES = {
  earrings: "earrings demi-fine gold editorial",
  necklaces: "necklace gold layered editorial",
  huggies: "huggie hoops gold small editorial",
  sets: "jewelry gift set editorial",
};

export default function CategoryTiles() {
  const featured = categories.filter((c) => ["earrings", "necklaces", "huggies"].includes(c.id));

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2
              id="categories-title"
              className="mt-3 font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl"
            >
              Three ways to begin.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((cat) => {
            const labelId = `cat-${cat.id}-label`;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative block overflow-hidden"
              >
                <ImageFrame
                  id={`cat-${cat.id}-img`}
                  query={`[${labelId}] [categories-title]`}
                  ratio="4x5"
                  width={800}
                  tone="warm"
                  alt={cat.label}
                  className="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent p-6">
                  <div className="flex w-full items-end justify-between">
                    <div>
                      <p
                        id={labelId}
                        className="font-serif text-3xl text-ivory md:text-4xl"
                      >
                        {cat.label}
                      </p>
                      <p className="mt-1 font-sans text-[12px] uppercase tracking-product text-ivory/75">
                        Shop the edit →
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-ivory text-charcoal transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
