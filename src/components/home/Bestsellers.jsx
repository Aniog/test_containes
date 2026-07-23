import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="bestsellers"
      className="bg-bone-100 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Most Loved"
            title={<>Bestsellers</>}
            subtitle="The pieces our community can't stop reaching for."
            align="left"
            className="max-w-md"
          />
          <Link
            to="/shop"
            className="link-underline inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 self-start sm:self-end"
          >
            View all
            <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.slice(0, 5).map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
