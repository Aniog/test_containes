import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InlineImage from "@/components/ui/InlineImage";
import { CATEGORIES_FOR_HOMEPAGE } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section
      aria-labelledby="categories-title"
      className="bg-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Shop By</p>
            <h2
              id="categories-title"
              className="mt-3 font-display text-4xl md:text-5xl leading-tight"
            >
              Category
            </h2>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {CATEGORIES_FOR_HOMEPAGE.map((c) => (
            <li key={c.id}>
              <Link
                to={`/shop?category=${c.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-cream-warm"
              >
                <InlineImage
                  imgId={c.imgId}
                  query={`[cat-desc-${c.id}] [cat-title-${c.id}] [categories-title]`}
                  ratio="3x4"
                  width={900}
                  alt={c.label}
                  className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,11,7,0) 50%, rgba(15,11,7,0.7) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8 text-ivory">
                  <p
                    id={`cat-title-${c.id}`}
                    className="font-display text-3xl md:text-4xl leading-none"
                  >
                    {c.label}
                  </p>
                  <p
                    id={`cat-desc-${c.id}`}
                    className="mt-1 text-[10px] tracking-eyebrow uppercase text-ivory/75"
                  >
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] tracking-eyebrow uppercase opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-gold-soft">
                    Shop {c.label}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
