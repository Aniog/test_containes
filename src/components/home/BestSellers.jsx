import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellers() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-ivory">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="eyebrow">Most Loved</span>
            <h2 className="display-2 text-espresso">Bestsellers</h2>
            <p className="text-sm md:text-[15px] text-graphite/80 font-light leading-relaxed max-w-lg">
              The pieces our community reaches for most — edited from the quiet essentials
              to the heirloom-worthy statement.
            </p>
          </div>
          <Link
            to="/shop"
            className="label text-espresso inline-flex items-center gap-2 hover:text-brass transition-colors group"
          >
            View all
            <ArrowRight size={12} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
