import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-warmgray/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-wider uppercase font-semibold text-espresso">{title}</span>
        {open ? <ChevronUp size={14} className="text-taupe" /> : <ChevronDown size={14} className="text-taupe" />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-taupe leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-taupe">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    openDrawer();
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-sand overflow-hidden mb-4">
              <img
                alt={product.shortName}
                data-strk-img-id={`${product.imgId}-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-sand overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.shortName} view ${i + 1}`}
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Hidden text for image search */}
            <span className="sr-only" id={product.titleId}>{product.shortName}</span>
            <span className="sr-only" id={product.descId}>{product.description}</span>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-espresso font-semibold mb-2">
              {product.name}
            </h1>
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="text-2xl font-medium text-espresso mb-6">${product.price}</p>
            <p className="text-mocha/80 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase font-semibold text-espresso mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, idx) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === idx
                        ? 'border-espresso bg-espresso text-warmwhite'
                        : 'border-warmgray/40 text-mocha hover:border-espresso'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase font-semibold text-espresso mb-3">Quantity</p>
              <div className="inline-flex items-center border border-warmgray/30">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full text-center mb-8">
              Add to Cart &mdash; ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-espresso">Materials:</strong> {product.materials}</p>
                <p><strong className="text-espresso">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
