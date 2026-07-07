import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
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
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-800 mb-3">Product Not Found</h1>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-charcoal-700 transition-colors">
            <ArrowLeft size={13} />
            <span className="tracking-widest uppercase">Back to Shop</span>
          </Link>
        </div>

        {/* Product layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  );
};

export default ProductDetail;