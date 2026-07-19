import { Link, useParams } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getProductById, categories } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container-wide py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl text-espresso-300">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block btn-outline-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === product.category);

  return (
    <>
      <section className="pt-24 md:pt-28 bg-cream-100">
        <div className="container-wide">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-muted mb-6 md:mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-espresso-300 transition-colors">
              <Home className="h-3 w-3" strokeWidth={1.5} />
              Home
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-espresso-300 transition-colors">
              Shop
            </Link>
            {cat && (
              <>
                <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="hover:text-espresso-300 transition-colors"
                >
                  {cat.name}
                </Link>
              </>
            )}
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-espresso-300">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pb-16 md:pb-24">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
      <RelatedProducts productId={product.id} />
    </>
  );
}
