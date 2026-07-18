import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main ref={ref} className="pt-20 lg:pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="flex items-center gap-2 text-xs text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} selectedVariant="Gold" />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <section className="mt-24 border-t border-hairline pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-2xl text-center text-espresso tracking-wide">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
