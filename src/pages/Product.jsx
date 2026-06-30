import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getProduct } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const product = getProduct(id);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 container-x text-center">
        <h1 className="h-display text-display-md text-espresso-900">Not found</h1>
        <p className="mt-4 text-espresso-500">This piece is no longer in our collection.</p>
        <Link to="/shop" className="btn-outline mt-8">Back to shop</Link>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Breadcrumb */}
      <div className="container-x pt-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-espresso-500"
        >
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link
            to={`/shop?cat=${product.category}`}
            className="hover:text-gold-400 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-espresso-900">{product.name}</span>
        </nav>
      </div>

      <section className="container-x py-10 md:py-16">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 xl:gap-20">
          <ProductGallery product={product} />
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </div>
  );
}
