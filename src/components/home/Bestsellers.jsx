import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ProductCard from "@/components/shop/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { getBestsellers } from "@/data/products";

export default function Bestsellers() {
  const products = getBestsellers(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="eyebrow text-gold-deep">Most loved</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink leading-tight">
                Our <em className="italic font-normal text-mauve">bestsellers</em>
              </h2>
            </div>
            <Link to="/shop" className="link-underline inline-flex items-center gap-2">
              Shop all
              <ArrowRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} eager={i < 2} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
