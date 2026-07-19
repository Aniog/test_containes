import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="font-serif text-xl">Product not found</p>
        <Link to="/shop" className="mt-4 text-velmora-gold hover:underline text-sm">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-velmora-warmgray hover:text-velmora-espresso transition-colors mb-6 md:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="md:pt-4">
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </div>
  );
};

export default ProductDetail;
