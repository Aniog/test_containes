import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-velvet-500 text-sm">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block btn-outline text-xs">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-24 pb-4">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-velvet-400 hover:text-velvet-600 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Product layout */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ImageGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}