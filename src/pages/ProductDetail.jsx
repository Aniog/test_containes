import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductCard from '../components/home/ProductCard';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { productId } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs text-velmora-warm-gray hover:text-velmora-gold transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      {/* Product section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-velmora-cream border-t border-velmora-stone/50 py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
