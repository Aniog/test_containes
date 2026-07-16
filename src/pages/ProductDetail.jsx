import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-2xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const nameId = `pdp-${product.id}-name`;
  const descId = `pdp-${product.id}-desc`;

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <Link to="/shop" className="flex items-center gap-1 text-xs text-taupe hover:text-espresso transition-colors">
          <ChevronLeft size={14} />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} nameId={nameId} descId={descId} />
          <div>
            <ProductInfo product={product} />
            <ProductAccordions product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
}
