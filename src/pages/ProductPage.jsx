import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-muted" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-brand-muted font-sans leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0]);
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-brand-gold hover:underline font-sans">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-brand-muted">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors duration-300 ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'text-brand-gold fill-brand-gold'
                        : 'text-brand-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-brand-muted font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-brand-charcoal">${product.price}</p>

            <p
              id={product.descId}
              className="mt-4 text-sm text-brand-muted font-sans leading-relaxed"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <label className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs tracking-wide uppercase font-sans font-medium border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-brand-charcoal border-x border-brand-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full text-xs tracking-extra-wide uppercase font-sans font-medium py-4 flex items-center justify-center gap-2 transition-colors duration-300 ${
                added
                  ? 'bg-brand-charcoal text-white'
                  : 'bg-brand-gold text-white hover:bg-brand-gold-dark'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over premium brass base</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating for lasting shine</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid direct contact with perfume or water</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery available at checkout</li>
                  <li>30-day hassle-free returns</li>
                  <li>Gift packaging included with every order</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal text-center">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-sans font-medium text-brand-charcoal">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
