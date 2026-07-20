import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/lib/data';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="serif-heading text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-umber hover:text-espresso transition-colors tracking-widest uppercase"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />
          <div>
            <ProductInfo product={product} />
            <div className="mt-10">
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
