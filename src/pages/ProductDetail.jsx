import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <p className="text-charcoal-500 mb-4">Product not found.</p>
        <Link to="/shop" className="text-xs text-velvet-600 underline underline-offset-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <div className="container-page pt-24 md:pt-28 pb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-charcoal-500 hover:text-charcoal-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ImageGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </div>
  );
}
