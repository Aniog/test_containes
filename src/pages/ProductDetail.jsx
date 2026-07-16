import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const pdpRef = useRef(null);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (pdpRef.current) {
      const raf = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, pdpRef.current);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline inline-block">Browse All</Link>
      </div>
    );
  }

  return (
    <div ref={pdpRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-20">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-stone hover:text-gold transition-colors mb-8">
        <ChevronLeft className="w-3 h-3" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <ImageGallery productId={id} />
        <ProductInfo product={product} />
      </div>

      <RelatedProducts currentId={id} />
    </div>
  );
}
