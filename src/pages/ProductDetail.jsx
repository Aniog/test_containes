import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getProductById } from "../data/products";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductAccordions from "../components/product/ProductAccordions";
import RelatedProducts from "../components/product/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const pageRef = useRef(null);

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="bg-ivory pt-32 pb-32 text-center container-velmora">
        <p className="eyebrow">404</p>
        <h1 className="heading-display text-4xl mt-3">
          This piece is no longer in our atelier.
        </h1>
        <p className="mt-3 font-sans text-ink-soft">
          It may have sold out or moved to a different collection.
        </p>
        <Link to="/shop" className="btn-outline mt-8">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-ivory pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-velmora pt-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-ink-soft"
        >
          <Link to="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
          <Link to="/shop" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
          <Link
            to={`/shop/${product.category}`}
            className="hover:text-espresso transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.4} />
          <span className="text-espresso truncate max-w-[14ch]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Gallery + info */}
      <section className="container-velmora py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Accordions */}
      <section className="container-velmora pb-16 md:pb-24">
        <div className="max-w-3xl">
          <ProductAccordions product={product} />
        </div>
      </section>

      {/* Related */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
