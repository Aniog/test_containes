import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Accordion } from '@/components/ui';
import { ProductGallery, ProductInfo, ProductCard } from '@/components/product';
import { getProductBySlug, products } from '@/data/products';

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container-main py-20 text-center">
          <h1 className="serif-heading text-3xl text-brand-text-primary mb-4">
            Product Not Found
          </h1>
          <Link
            to="/collection"
            className="text-brand-gold hover:text-brand-gold-hover transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-main pb-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="md:sticky md:top-24 md:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-brand-text-primary mb-1">Materials</h4>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-text-primary mb-1">Care Instructions</h4>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-brand-text-primary mb-1">Shipping</h4>
                    <p>Free worldwide shipping on orders over $75. Standard shipping (5-7 business days) $6.95. Express shipping (2-3 business days) available at checkout.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-text-primary mb-1">Returns</h4>
                    <p>We offer 30-day hassle-free returns. Items must be unworn and in original packaging. Contact us for a return shipping label.</p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-brand-bg-secondary">
          <div className="container-main">
            <h2 className="serif-heading text-2xl md:text-3xl text-brand-text-primary text-center mb-10">
              You May Also Love
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showBadge={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
