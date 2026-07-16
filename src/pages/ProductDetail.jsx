import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container-page py-40 text-center">
        <h2 className="text-2xl font-serif text-charcoal">Product not found</h2>
        <Link to="/shop" className="mt-4 btn-outline text-xs inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-[72px] md:pt-[80px]">
      {/* Breadcrumb */}
      <div className="container-page py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs font-sans text-stone hover:text-charcoal transition-colors uppercase tracking-wider"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Main PDP */}
      <div className="container-page pb-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related */}
      <div className="hairline" />
      <RelatedProducts currentProductId={productId} />
    </div>
  );
}
