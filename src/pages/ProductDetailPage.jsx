import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';
import { ChevronRight } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[var(--velmora-text-muted)]">
          <Link to="/" className="hover:text-[var(--velmora-warm)] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-[var(--velmora-warm)] transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--velmora-text)]">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductAccordions product={product} />
      </section>

      <RelatedProducts currentProductId={product.id} />
    </main>
  );
}
