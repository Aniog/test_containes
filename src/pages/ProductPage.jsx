import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-deep-500">Product not found.</p>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center text-xs text-deep-500 hover:text-gold-600 transition-colors tracking-wide mb-8"
        >
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts products={products} currentId={product.id} />
    </main>
  );
}
