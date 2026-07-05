import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductAccordion } from '../components/product/ProductAccordion';
import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';

export function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const relatedProducts = products
    .filter((p) => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 hover:text-gold-700 underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-charcoal/50">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <ChevronRight size={14} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
              You May Also Like
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
              Complete the Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
