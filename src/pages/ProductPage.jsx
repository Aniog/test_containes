import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { findProductById } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductPage() {
  const { productId } = useParams();
  const product = findProductById(productId);
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [productId]);

  if (!product) {
    return (
      <div className="container-page py-32 text-center">
        <p className="font-serif text-3xl text-ink-soft">Piece not found.</p>
        <Link to="/shop" className="mt-6 inline-block btn-outline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* breadcrumb */}
      <div className="bg-ivory border-b border-hairline">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-widest-2 text-muted">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link to="/" className="hover:text-ink">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" strokeWidth={1.4} /></li>
              <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
              <li><ChevronRight className="w-3 h-3" strokeWidth={1.4} /></li>
              <li className="text-ink-soft capitalize">{product.category}</li>
              <li><ChevronRight className="w-3 h-3" strokeWidth={1.4} /></li>
              <li className="text-ink-soft truncate max-w-[200px]">{product.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-ivory">
        <div className="container-page py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery product={product} />
            <div>
              <ProductInfo product={product} />
            </div>
          </div>

          <div className="mt-16 md:mt-24 max-w-3xl">
            <ProductAccordions product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </div>
  );
}
