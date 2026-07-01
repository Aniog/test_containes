import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productImage } from "@/lib/placeholder";
import { categories } from "@/data/products";

const scenes = ["earring", "necklace", "huggie"];

export default function CategoryTiles() {
  return (
    <section className="py-20 sm:py-28 bg-ivory-100">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400 mb-4">
            Shop by category
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-espresso-200">
            Begin with what you'll wear most
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="group relative block aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-espresso-200"
            >
              <img
                src={productImage({ scene: scenes[i] || "earring", palette: "noir", w: 800, h: 1000 })}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso-300/70" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-ivory-50">
                <div className="text-[10px] tracking-widest2 uppercase text-gold-300 mb-2">
                  {c.tagline}
                </div>
                <div className="flex items-end justify-between">
                  <h3 className="font-serif text-3xl sm:text-4xl tracking-tight">
                    {c.name}
                  </h3>
                  <span className="inline-flex items-center text-[10px] tracking-widest2 uppercase text-ivory-100/80 group-hover:text-ivory-50 transition-colors">
                    Shop
                    <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
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
