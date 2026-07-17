import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordions from "@/components/product/ProductAccordions";
import RelatedProducts from "@/components/product/RelatedProducts";
import { getProductBySlug } from "@/data/products";

export default function ProductDetail() {
  const { productSlug } = useParams();
  const product = getProductBySlug(productSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productSlug]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-soft border-b border-line">
        <div className="mx-auto max-w-editorial px-5 md:px-10 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] tracking-eyebrow uppercase text-ink-soft">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-ink truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-cream py-10 md:py-16">
        <div className="mx-auto max-w-editorial px-5 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <ProductAccordions product={product} />
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
