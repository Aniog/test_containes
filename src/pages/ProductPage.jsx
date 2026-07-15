import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm font-sans text-taupe">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Accordion section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <ProductAccordion product={product} />
      </section>

      {/* Related products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
}
