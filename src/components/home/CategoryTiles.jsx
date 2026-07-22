import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StrkImage from "@/components/ui/StrkImage";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, node);
      } catch {
        // ignore
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16">
          <SectionTitle
            eyebrow="Curated"
            title="Shop by Category"
            italicWord="Category"
            align="center"
          />
        </div>

        <Reveal
          ref={containerRef}
          delay={80}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
        >
          {categories.map((cat, index) => (
            <CategoryTile key={cat.id} category={cat} index={index} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CategoryTile({ category, index }) {
  return (
    <Link
      to={`/shop?cat=${category.id}`}
      className="group relative block aspect-[3/4] overflow-hidden bg-espresso md:aspect-[4/5]"
    >
      <StrkImage
        query={category.imageQuery}
        ratio="3x4"
        width={900}
        alt={category.label}
        fill
        className="!absolute !inset-0 !h-full !w-full"
        imgClassName="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/10 transition-opacity duration-500 group-hover:from-espresso/90" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-8 text-center">
        <h3 className="font-serif text-3xl font-light text-ivory transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl">
          {category.label}
        </h3>
        <span className="mt-3 inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-widest2 text-ivory/0 transition-all duration-500 group-hover:text-ivory/90">
          Shop the Edit
          <ArrowUpRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
