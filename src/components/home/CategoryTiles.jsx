import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categoryTiles } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream">
      <div className="container-editorial py-20 md:py-28">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow mb-4">By category</p>
          <h2 className="display-2 text-balance">Shop the collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden bg-sand aspect-[3/4] md:aspect-[4/5]"
            >
              <img
                alt={`${cat.title} collection`}
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-${cat.id}-title] [cat-${cat.id}-eyebrow] velmora ${cat.id}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p
                  id={`cat-${cat.id}-eyebrow`}
                  className="text-[10px] uppercase tracking-widest-2 text-cream/85"
                >
                  {cat.eyebrow}
                </p>
                <h3
                  id={`cat-${cat.id}-title`}
                  className="mt-2 font-serif text-cream text-3xl md:text-4xl font-light"
                >
                  {cat.title}
                </h3>
                <div className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest-2 text-cream/90 border-b border-cream/40 pb-1 self-start transition-all duration-300 group-hover:border-cream">
                  Shop now
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
