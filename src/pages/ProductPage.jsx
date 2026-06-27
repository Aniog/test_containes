import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import { Star } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-xs tracking-[0.12em] uppercase text-velmora-gold hover:text-velmora-gold-dark underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs tracking-[0.08em] uppercase text-velmora-stone">
          <Link to="/" className="hover:text-velmora-charcoal transition-velmora">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-velmora">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Related products */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-xl lg:text-2xl tracking-[0.06em] text-velmora-charcoal">
              You May Also Like
            </h2>
            <hr className="hr-hairline mt-6 max-w-[200px] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-velmora-sand/10 overflow-hidden mb-4">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span id={`related-name-${p.id}`} className="hidden">{p.name}</span>
                <h3 className="product-name text-xs mb-1.5">{p.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${i < Math.floor(p.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                    />
                  ))}
                </div>
                <p className="price-tag text-sm">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}