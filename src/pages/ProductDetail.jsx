import { useParams, Link } from 'react-router-dom';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/shared/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 hover:text-gold-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-charcoal-500 hover:text-charcoal-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-charcoal-400" />
          <Link to="/shop" className="text-charcoal-500 hover:text-charcoal-700 transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4 text-charcoal-400" />
          <span className="text-charcoal-700 capitalize">{product.category}</span>
          <ChevronRight className="w-4 h-4 text-charcoal-400" />
          <span className="text-charcoal-900">{product.name}</span>
        </nav>
      </div>
      
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>
          
          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
      
      {/* Accordions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductAccordion description={product.description} />
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">You May Also Like</p>
              <h2 className="section-title">Complete the Look</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
