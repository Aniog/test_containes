import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import ImageGallery from '../components/product/ImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductAccordion from '../components/product/ProductAccordion';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link
            to="/collection"
            className="text-sm tracking-[0.1em] uppercase text-gold hover:text-gold-hover transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/collection"
          className="inline-flex items-center gap-1 text-xs tracking-[0.1em] uppercase text-warm-gray hover:text-charcoal transition-colors mb-8"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ImageGallery images={product.images} name={product.name} />
          <div className="md:sticky md:top-28 md:self-start">
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>

        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}