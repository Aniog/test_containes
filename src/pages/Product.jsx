import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const topRef = useRef(null);

  // Reset scroll on product change so changing from one PDP to another
  // (via a related card) doesn't preserve the previous mid-page position.
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [id]);

  // Page-level image scan ensures every data-strk-img / data-strk-bg in
  // the page subtree gets resolved, including ImageGallery + RelatedProducts.
  useEffect(() => {
    const node = topRef.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div ref={topRef}>
      <section className="bg-cream pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-20">
            <ImageGallery product={product} />
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentId={product.id} category={product.category} />
    </div>
  );
}
