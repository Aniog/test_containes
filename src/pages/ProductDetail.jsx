import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="section-padding pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="section-padding mb-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-velmora-stone hover:text-velmora-gold transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Product section */}
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="hairline-divider mt-20" />

      {/* Related products */}
      <RelatedProducts currentProductId={product.id} />
    </main>
  );
}