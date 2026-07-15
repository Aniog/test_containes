import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-pearl/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedImage, selectedVariant]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedVariant(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-velmora-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-ghost mt-6 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div ref={containerRef} className="section-padding pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-stone">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
            <img
              data-strk-img-id={`pdp-main-${product.images[selectedImage].id}`}
              data-strk-img={`${product.images[selectedImage].query}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                  selectedImage === idx
                    ? 'border-velmora-gold'
                    : 'border-transparent hover:border-velmora-pearl'
                }`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${img.id}`}
                  data-strk-img={`${img.query}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-charcoal leading-tight">
            {product.name}
          </h1>

          <p className="font-sans text-2xl font-light text-velmora-charcoal mt-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-velmora-gold text-velmora-gold'
                    : 'text-velmora-pearl'
                }`}
              />
            ))}
            <span className="font-sans text-xs text-velmora-stone ml-1.5">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="font-sans text-sm text-velmora-stone leading-relaxed mt-6">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mt-8">
            <p className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-3">
              Finish
            </p>
            <div className="flex gap-3">
              {product.variants.map((variant, idx) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(idx)}
                  className={`px-6 py-2.5 font-sans text-sm tracking-wider uppercase border transition-all duration-300 ${
                    selectedVariant === idx
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-pearl text-velmora-stone hover:border-velmora-charcoal hover:text-velmora-charcoal'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-velmora-pearl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="btn-primary w-full text-center flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen={true}>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3"><strong className="text-velmora-charcoal">Materials:</strong> {product.materials}</p>
              <p><strong className="text-velmora-charcoal">Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-3"><strong className="text-velmora-charcoal">Shipping:</strong> {product.shipping}</p>
              <p><strong className="text-velmora-charcoal">Returns:</strong> {product.returns}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 pt-16 border-t border-velmora-pearl/50">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`related-${rp.images[0].id}`}
                    data-strk-img={`${rp.images[0].query}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-charcoal leading-tight">
                  {rp.name}
                </h3>
                <p className="font-sans text-sm font-medium text-velmora-smoke mt-1">
                  ${rp.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}