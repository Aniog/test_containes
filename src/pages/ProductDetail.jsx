import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-[0.12em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-brand-muted leading-relaxed">
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

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
  }, [selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-brand-muted">
              <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
              <li>/</li>
              <li className="text-brand-charcoal">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="aspect-[3x4] bg-brand-warm overflow-hidden">
                <img
                  data-strk-img-id={`pdp-main-${product.images[selectedImage].imgId}`}
                  data-strk-img={`[pdp-desc] [pdp-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.images[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img.imgId}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-24 bg-brand-warm overflow-hidden border-2 transition-colors duration-300 ${
                      selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`pdp-thumb-${img.imgId}`}
                      data-strk-img={`[pdp-desc] [pdp-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:pl-4">
              <h1
                id="pdp-name"
                className="product-name text-xl md:text-2xl text-brand-charcoal"
              >
                {product.name}
              </h1>
              <p
                id="pdp-desc"
                className="mt-2 font-sans text-sm text-brand-muted"
              >
                {product.description}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-brand-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="mt-4 font-serif text-2xl text-brand-charcoal">
                ${product.price}
              </p>

              {/* Variant selector */}
              <div className="mt-6">
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-brand-muted mb-3">
                  Tone
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-sans text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-brand-gold bg-brand-gold text-white'
                          : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-brand-muted mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-sans text-sm text-brand-charcoal w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addItem(product, selectedVariant);
                  }
                  setQuantity(1);
                }}
                className="mt-8 w-full btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${product.price * quantity}
              </button>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  <p>{product.details}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                  <p>{product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout.</p>
                  <p>30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="py-16 md:py-20 bg-brand-warm">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-heading md:text-display-sm text-brand-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] bg-brand-sand overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.images[0].imgId}`}
                    data-strk-img={`[related-desc-${p.id}] [related-name-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="product-name text-xs md:text-sm text-brand-charcoal">
                  {p.name}
                </h3>
                <p id={`related-desc-${p.id}`} className="text-[11px] text-brand-muted mt-0.5 line-clamp-1">
                  {p.description}
                </p>
                <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
