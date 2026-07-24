import { useParams, Link } from 'react-router-dom';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="heading-2 text-charcoal mb-4">Product Not Found</h1>
          <p className="text-charcoal-light mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumbs */}
      <div className="section-container py-4">
        <nav className="flex items-center gap-2 text-body-sm text-warm-gray">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          <Link
            to={`/collections?category=${product.category}`}
            className="hover:text-charcoal transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="section-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="section-container pb-16">
        <ProductAccordion description={product.description} />
      </section>

      {/* Related Products */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <h2 className="heading-3 text-charcoal text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
