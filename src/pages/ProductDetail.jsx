import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/data/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-nav font-sans font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-muted font-sans leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-off-white">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-charcoal">Product not found</h2>
          <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-nav font-sans font-medium text-velmora-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-off-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[4/3] bg-velmora-cream overflow-hidden mb-4">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgIdHover}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedImage(0)}
                className={`w-16 h-16 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                  selectedImage === 0 ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img
                  data-strk-img-id={`thumb-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(1)}
                className={`w-16 h-16 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                  selectedImage === 1 ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img
                  data-strk-img-id={`thumb-${product.imgIdHover}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 2"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <h1 id={product.titleId} className="product-name text-2xl md:text-3xl font-medium text-velmora-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted font-sans">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-serif font-medium text-velmora-charcoal">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="mt-4 text-sm text-velmora-muted font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs uppercase tracking-nav font-sans font-medium rounded-full border transition-colors ${
                      selectedTone === tone
                        ? 'bg-velmora-gold text-velmora-white border-velmora-gold'
                        : 'bg-transparent text-velmora-charcoal border-velmora-sand hover:border-velmora-gold'
                    }`}
                  >
                    {tone === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-sand text-velmora-charcoal hover:border-velmora-gold transition-colors rounded-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-velmora-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-sand text-velmora-charcoal hover:border-velmora-gold transition-colors rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-velmora-gold text-velmora-white py-4 text-xs uppercase tracking-nav font-sans font-medium hover:bg-velmora-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-velmora-muted font-sans">
              <span>Free Shipping</span>
              <span className="text-velmora-sand">·</span>
              <span>30-Day Returns</span>
              <span className="text-velmora-sand">·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece comes beautifully packaged in our signature velvet pouch and gift box, ready for giving or keeping.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Material: {product.material} over hypoallergenic stainless steel base.</p>
                <p className="mt-2">Care: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on orders over $75. Standard delivery 5–10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. If you're not completely satisfied, return your piece in its original packaging for a full refund.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-charcoal text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] bg-velmora-cream overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-sm font-medium text-velmora-charcoal mt-3">{p.name}</h3>
                <p className="text-sm font-serif font-medium text-velmora-charcoal mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
