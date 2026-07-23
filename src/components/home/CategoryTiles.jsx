import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { homeCategories } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="shop-by-category"
      className="bg-bone-100 py-20 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Shop the Edit"
          title={<>Shop by Category</>}
          subtitle="From the everyday huggie to the heirloom — find your piece."
        />
      </div>
      <div className="container-x mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {homeCategories.map((c, i) => (
            <CategoryTile
              key={c.key}
              category={c}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category, index }) {
  return (
    <Link
      to={category.href}
      className="group relative block overflow-hidden aspect-[3/4] image-placeholder reveal"
      style={{ animationDelay: `${index * 100}ms` }}
      aria-label={`Shop ${category.title}`}
    >
      <img
        alt={category.title}
        data-strk-img-id={category.imgId}
        data-strk-img={`[category-title-${category.key}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="900"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        loading="lazy"
        className="relative z-10 w-full h-full object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 sm:p-8">
        <h3
          id={`category-title-${category.key}`}
          className="display-serif text-bone-50 text-3xl sm:text-4xl"
        >
          {category.title}
        </h3>
        <span
          className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-bone-50
                     translate-y-1 opacity-80 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-500 ease-out-soft"
        >
          Shop now
          <ArrowRight size={13} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
