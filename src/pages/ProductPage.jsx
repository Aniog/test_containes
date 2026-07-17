import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-ink mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-velmora-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-wide section-padding mb-8">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-velmora-taupe hover:text-velmora-ink transition-colors">
          <ChevronLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Product */}
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}