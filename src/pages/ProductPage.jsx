import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-warm-500 text-lg mb-4">Product not found</p>
        <Link to="/shop" className="text-gold-300 hover:text-gold-400 transition-colors">
          Browse all pieces
        </Link>
      </div>
    );
  }

  const galleryImages = [
    product.image,
    product.image.replace('w=600', 'w=600&fit=crop&crop=bottom'),
    product.image.replace('w=600', 'w=600&fit=crop&crop=top'),
  ];

  return (
    <main className="pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-warm-500 text-xs uppercase tracking-wider hover:text-warm-900 transition-colors font-sans"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={galleryImages} />
          <div className="md:pt-4">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Related */}
      <RelatedProducts currentId={product.id} />
    </main>
  );
}