import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl tracking-widest uppercase text-espresso">Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-xs text-warm">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </div>
  );
}
