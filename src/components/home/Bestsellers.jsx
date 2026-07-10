import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getBestsellers } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const Bestsellers = () => {
  const containerRef = useRef(null);
  const products = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-espresso font-light">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors underline-offset-4 hover:underline self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
