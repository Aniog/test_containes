import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

const QUERIES = {
  earrings: "[categories-section-title] gold earrings editorial portrait close-up model",
  necklaces: "[categories-section-title] gold crystal pendant necklace on model editorial portrait",
  huggies: "[categories-section-title] chunky gold dome huggie hoop earrings on model ear",
};

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ivory py-20 md:py-28" ref={containerRef}>
      <div className="container-velmora">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-3">Shop by Category</p>
          <h2
            id="categories-section-title"
            className="display-serif text-4xl md:text-5xl lg:text-6xl text-espresso text-balance"
          >
            The Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((c, i) => (
            <CategoryTile
              key={c.id}
              category={c}
              query={QUERIES[c.id]}
              featured={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category, query, featured }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative block overflow-hidden bg-espresso-soft aspect-[3/4] md:aspect-[4/5]"
    >
      <img
        alt={category.name}
        data-strk-img-id={category.imgId}
        data-strk-img={query}
        data-strk-img-ratio={featured ? "3x4" : "4x5"}
        data-strk-img-width="900"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-espresso/30" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-ivory">
        <p className="text-[10px] uppercase tracking-[0.3em] text-bronze-light/90 mb-2">
          {category.blurb}
        </p>
        <div className="flex items-end justify-between">
          <h3 className="font-serif text-3xl md:text-4xl">{category.name}</h3>
          <span className="w-10 h-10 inline-flex items-center justify-center border border-ivory/40 transition-all duration-500 ease-editorial group-hover:bg-ivory group-hover:text-espresso">
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
