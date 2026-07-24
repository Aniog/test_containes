import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-velmora-ink">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-ink">{product.name}</span>
        </nav>

        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Related products */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl lg:text-3xl text-velmora-ink font-light tracking-wide">
              You May Also Like
            </h2>
            <div className="hairline w-16 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}