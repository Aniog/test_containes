import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-velmora-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-muted leading-relaxed font-sans">
          {children}
        </div>
      )}
    </div>
  );
}

function ProductImageGallery({ images, name }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((imgId, i) => (
          <button
            key={imgId}
            onClick={() => setActive(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
              i === active ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-divider'
            }`}
          >
            <img
              data-strk-img-id={`pdp-thumb-${imgId}`}
              data-strk-img={`${name} gold jewelry detail close up product photography`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velmora-cream-dark overflow-hidden rounded-sm">
        <img
          data-strk-img-id={`pdp-main-${images[active]}`}
          data-strk-img={`${name} gold jewelry product photography elegant warm lighting studio shot neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function RelatedProducts({ currentId, category }) {
  const related = useMemo(() => {
    return products
      .filter((p) => p.id !== currentId)
      .sort((a, b) => {
        if (a.category === category && b.category !== category) return -1;
        if (b.category === category && a.category !== category) return 1;
        return 0;
      })
      .slice(0, 4);
  }, [currentId, category]);

  return (
    <section className="py-16 md:py-20 px-5 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-3">You May Also Like</h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group block">
            <div className="aspect-[3/4] bg-velmora-cream-dark overflow-hidden rounded-sm mb-3">
              <img
                data-strk-img-id={`related-${product.id}`}
                data-strk-img={`${product.name} gold jewelry product photography`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors text-center">
              {product.name}
            </h3>
            <p className="text-xs text-velmora-muted text-center mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-velmora-gold underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <>
      <div className="pt-20 md:pt-24 pb-12 md:pb-18 px-5 md:px-8 max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-velmora-muted font-sans">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal capitalize">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left - Gallery */}
          <ProductImageGallery images={product.images} name={product.name} />

          {/* Right - Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] uppercase text-velmora-charcoal">
              {product.name}
            </h1>

            <p className="font-serif text-xl md:text-2xl text-velmora-charcoal mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-divider'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-velmora-muted leading-relaxed mt-5 font-sans">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-velmora-divider my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-velmora-charcoal mb-3">
                Tone: {variant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs font-sans font-medium uppercase tracking-[0.1em] border transition-all duration-300 rounded-sm ${
                      variant === v
                        ? 'bg-velmora-charcoal text-velmora-cream border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-divider hover:border-velmora-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-divider rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-cream-dark transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-medium min-w-[3rem] text-center font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-cream-dark transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal hover:bg-velmora-charcoal-light text-velmora-cream py-4 text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} category={product.category} />
    </>
  );
}
