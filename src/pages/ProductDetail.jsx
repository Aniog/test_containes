import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
      return;
    }
  }, [product, navigate]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [product]);

  if (!product) return null;

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-stone-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <ProductGallery product={product} />

          {/* Right: Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductInfo product={product} />
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-stone-200">
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
