import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-3xl text-warm-charcoal">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors mb-6"
        >
          <ChevronLeft className="w-3 h-3" /> Back to Shop
        </Link>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}