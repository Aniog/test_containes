import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="text-gold text-sm mt-4 inline-block no-underline hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-warm-gray">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-warm-gray">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-stone/30 overflow-hidden">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-${product.id}-title] [pdp-${product.id}-desc]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-stone/30 overflow-hidden cursor-pointer border border-transparent hover:border-gold transition-colors">
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="text-sm text-warm-gray leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-wider border cursor-pointer transition-all ${
                      variant === v
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-charcoal border-stone hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors cursor-pointer"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-stone">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors cursor-pointer"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full mt-8 bg-gold text-white py-4 text-sm font-sans font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: product.materials },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns — items must be unworn and in original packaging.' },
              ].map(acc => (
                <div key={acc.key} className="border-b border-stone">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-warm-gray leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-stone">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block no-underline">
                  <div className="relative aspect-[3/4] bg-stone/30 overflow-hidden mb-3">
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      data-strk-img-id={product.imgId2}
                      data-strk-img={`[${product.titleId}] gold jewelry close up`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm font-sans text-warm-gray">${product.price}</p>
                  <p id={product.descId} className="sr-only">{product.description}</p>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-[72px] left-0 right-0 mx-2 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs font-sans font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-stone hover:bg-gold hover:text-white hover:border-gold cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
