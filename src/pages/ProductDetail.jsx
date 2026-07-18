import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-extra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
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
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold hover:text-brand-gold-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-muted">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-brand-muted leading-relaxed mt-4"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs tracking-extra-wide uppercase transition-colors duration-200 ${
                      selectedTone === tone
                        ? 'bg-brand-gold text-brand-ivory'
                        : 'border border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal hover:border-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal min-w-[24px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal hover:border-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-brand-gold text-brand-ivory py-4 font-sans text-xs tracking-super-wide uppercase font-medium hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K Gold Plated over 925 Sterling Silver base. Hypoallergenic and nickel-free.</p>
                <p className="mt-2">To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                <p className="mt-2">Clean gently with a soft, lint-free cloth after each wear.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery: 5–10 business days. Express: 2–4 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="reveal font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <Link key={p.id} to={`/product/${p.id}`} className={`reveal reveal-delay-${i + 1} group`}>
                <div className="aspect-[3/4] overflow-hidden bg-brand-warm">
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
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal mt-3">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-brand-muted mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
