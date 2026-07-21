import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductAccordion } from '@/components/product/ProductAccordion';
import { ProductCard } from '@/components/product/ProductCard';
import { getProductBySlug, products } from '@/data/products';

export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-ivory">
      {/* Breadcrumb */}
      <div className="container-wide py-4 border-b border-hairline">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-sm text-stone hover:text-warmblack transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-wide py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="order-2 md:order-1">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div className="order-1 md:order-2">
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="container-wide pb-12">
        <div className="max-w-2xl">
          <ProductAccordion product={product} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream py-12 md:py-16">
          <div className="container-wide">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
