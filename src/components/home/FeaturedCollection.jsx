import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const allFeatured = products.filter(p => p.featured);
const featured = allFeatured.length >= 4 ? allFeatured.slice(0, 4) : products.slice(0, 4);

function ProductCard({ product, size = 'normal' }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group block relative overflow-hidden ${size === 'large' ? 'row-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream-dark aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover img-hover"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-end pb-8 transition-opacity duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 60%)' }}
        >
          <p
            className="text-cream font-serif text-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {product.name}
          </p>
          <p className="text-cream/80 text-sm font-light mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            ${product.price}
          </p>
        </div>

        {product.new && (
          <div className="absolute top-4 left-4">
            <span className="label-caps bg-cream text-ink px-2 py-1" style={{ fontSize: '9px' }}>New</span>
          </div>
        )}
      </div>

      {/* Below image info (visible always on mobile) */}
      <div className="mt-3 md:hidden">
        <p className="font-serif text-lg text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {product.name}
        </p>
        <p className="label-caps text-muted mt-0.5">${product.price}</p>
      </div>

      {/* Hidden text for image query */}
      <p id={product.titleId} className="sr-only">{product.name}</p>
      <p id={product.descId} className="sr-only">{product.description}</p>
    </Link>
  );
}

export default function FeaturedCollection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured-collection" className="py-20 md:py-28 px-6 md:px-10 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="label-caps text-gold mb-3">New Arrivals</p>
            <h2
              className="font-serif text-4xl md:text-5xl text-ink font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The Collection
            </h2>
          </div>
          <Link
            to="/shop"
            className="btn-secondary self-start md:self-auto"
          >
            View the Collection
          </Link>
        </div>

        {/* Editorial grid — asymmetric layout */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large featured item */}
          <div className="col-span-2 md:col-span-5 md:row-span-2">
            <ProductCard product={featured[0]} size="large" />
          </div>

          {/* Top right */}
          <div className="col-span-1 md:col-span-4">
            <ProductCard product={featured[1]} />
          </div>

          {/* Bottom right two */}
          <div className="col-span-1 md:col-span-3">
            <ProductCard product={featured[2]} />
          </div>

          {/* Bottom wide */}
          <div className="col-span-2 md:col-span-7">
            <ProductCard product={featured[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
