import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="serif-heading text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-16">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-taupe hover:text-warmgold transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
}
