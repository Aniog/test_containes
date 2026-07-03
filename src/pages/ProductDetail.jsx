import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { productById, products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) return <NotFound />;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-hairline bg-ivory">
        <div className="container-page py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-taupe"
          >
            <Link to="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-ink transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-ink truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-ivory">
        <div className="container-page py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery product={product} />
            <div>
              <ProductInfo product={product} />
            </div>
          </div>

          <div className="mt-16 md:mt-24 max-w-3xl">
            <ProductAccordion product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
