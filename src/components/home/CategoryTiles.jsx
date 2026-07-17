import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";
import { categories } from "@/data/products";

export function CategoryTiles() {
  return (
    <section className="bg-canvas-soft">
      <div className="container-editorial py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Shop by</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Category
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="group relative block overflow-hidden bg-espresso"
            >
              <JewelryImage
                art={c.art}
                palette={c.id === "necklaces" ? "blush" : "honey"}
                ratio="4/5"
                className="w-full transition-transform duration-700 group-hover:scale-105"
                alt={c.label}
              />
              <div
                aria-hidden
                className="absolute inset-0 transition-colors duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-wider3 text-ink-onDarkSecondary">
                  {c.blurb}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-3xl text-ink-onDark md:text-4xl">
                    {c.label}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-ink-onDark/60 text-ink-onDark transition-all duration-500 group-hover:bg-ink-onDark group-hover:text-espresso">
                    <ArrowRight size={14} strokeWidth={1.4} />
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

export default CategoryTiles;
