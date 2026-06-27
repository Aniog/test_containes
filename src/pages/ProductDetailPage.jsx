import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[var(--color-charcoal)] mb-4">
            Product Not Found
          </h1>
          <Link 
            to="/shop"
            className="text-[var(--color-gold)] hover:underline"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedProducts = getRelatedProducts(product.id, 4);
  
  return (
    <main className="pt-20 md:pt-24 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </nav>
        
        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>
          
          {/* Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>
        
        {/* Accordions */}
        <div className="max-w-2xl mx-auto mb-16">
          <ProductAccordion product={product} />
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-[var(--color-sand)]">
            <div className="text-center mb-8">
              <h2 
                className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                You May Also Like
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
