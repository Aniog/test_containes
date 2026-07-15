import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors font-sans">
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Product detail */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-16 mt-24 lg:mt-32">
          <hr className="hairline-divider mb-16" />
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Complete the Look</p>
            <h2 className="serif-heading text-3xl md:text-4xl font-light">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
