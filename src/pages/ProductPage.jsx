import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="heading-section text-charcoal-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-body text-charcoal-500 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <button onClick={() => navigate('/shop')} className="btn-primary text-xs">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20 lg:pt-24">
      {/* Product detail */}
      <section ref={containerRef} className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductAccordion product={product} />
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="divider-full" />
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </main>
  );
}
