import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button as={Link} to="/shop" variant="outline">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  );
}
