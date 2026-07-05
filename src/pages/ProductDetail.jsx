import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products, getRelatedProducts } from "../data/products";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1
            className="text-display-md text-charcoal-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gold text-overline uppercase tracking-[0.14em] font-semibold"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <nav className="flex items-center gap-2 text-caption text-charcoal-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-section md:pb-section-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-section md:py-section-lg bg-cream-100/30 border-t border-cream-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2
                className="text-display-sm text-charcoal-800 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                You May Also Like
              </h2>
              <div className="section-divider" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
