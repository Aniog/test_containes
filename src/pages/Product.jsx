import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { productById, products } from "@/data/products";
import Container from "@/components/ui/Container";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const product = productById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <Container className="py-40 text-center">
        <h1 className="display-2 text-espresso mb-3">Not found</h1>
        <p className="text-taupe font-light mb-6">This piece is no longer in our atelier.</p>
        <Link to="/shop" className="label text-brass hover:text-brass-deep transition-colors">
          Browse the collection →
        </Link>
      </Container>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-ivory border-b border-hairline">
        <Container>
          <nav className="flex items-center gap-2 py-4 text-xs text-taupe font-light">
            <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
            <ChevronRight size={12} strokeWidth={1.4} />
            <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
            <ChevronRight size={12} strokeWidth={1.4} />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-espresso transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight size={12} strokeWidth={1.4} />
            <span className="text-espresso truncate">{product.name}</span>
          </nav>
        </Container>
      </div>

      <section className="py-10 md:py-16 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <ProductGallery product={product} />
            <div className="md:sticky md:top-28 md:self-start">
              <ProductInfo product={product} />
            </div>
          </div>
        </Container>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
