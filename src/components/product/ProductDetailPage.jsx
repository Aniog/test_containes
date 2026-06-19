import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductAccordion from './ProductAccordion';
import RelatedProducts from './RelatedProducts';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-charcoal-500 mb-6">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-charcoal-700 hover:text-gold-600"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/collections/all"
          className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </main>
  );
}