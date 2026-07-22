import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const ref = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 5);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="bg-cream">
      <div className="container-editorial py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Most loved</p>
            <h2 id="bestsellers-title" className="display-2 text-balance">
              Our bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-ghost self-start md:self-auto"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-14">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
