import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function Bestsellers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-100"
      aria-labelledby="bestsellers-heading"
    >
      <div className="container-x py-20 md:py-28">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Most loved</p>
          <h2
            id="bestsellers-heading"
            className="h-display mt-3 text-display-md text-espresso-900"
          >
            Our bestsellers, this season
          </h2>
          <p className="mt-4 text-espresso-500 text-[15px] leading-relaxed">
            The five pieces our community keeps coming back to —
            gifting, restocking, and never taking off.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-7 md:gap-y-14">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center" delay={200}>
          <Link to="/shop" className="link-underline">
            View the full collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
