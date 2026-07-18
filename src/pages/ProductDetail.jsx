import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-muted font-serif text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-8 md:pt-32">
        {/* Breadcrumb */}
        <div className="text-[10px] tracking-[0.15em] uppercase text-velmora-muted mb-8">
          <a href="/" className="hover:text-velmora-gold transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-velmora-gold transition-colors">Shop</a>
          <span className="mx-2">/</span>
          <span className="text-velmora-black">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductImageGallery product={product} />
          <div className="md:sticky md:top-28 self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 border-t border-velmora-sand/40">
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
