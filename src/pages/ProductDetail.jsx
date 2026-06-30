import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { products } from '../data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase font-medium text-charcoal-700">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-charcoal-400" /> : <ChevronDown className="w-4 h-4 text-charcoal-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-charcoal-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold-600 hover:text-gold-700 tracking-wider uppercase">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-charcoal-400 tracking-wider">
          <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
              <img
                data-strk-img-id={activeThumb === 0 ? product.imgId : product.imgIdAlt}
                data-strk-img={`[${product.id}-detail-name] gold jewelry elegant dark background product`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`w-20 h-20 bg-cream-200 border-2 transition-colors ${
                    activeThumb === i ? 'border-gold-500' : 'border-transparent hover:border-gold-200'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold-600 text-2xs font-serif tracking-wider">
                      {i === 0 ? 'FRONT' : 'DETAIL'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-8">
            {product.badge && (
              <span className="inline-block text-2xs tracking-widest-xl uppercase text-gold-600 bg-gold-100 px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1
              id={`${product.id}-detail-name`}
              className="font-serif text-2xl md:text-3xl tracking-widest-xl uppercase text-charcoal-800 mb-2"
              style={{ fontWeight: 500 }}
            >
              {product.name}
            </h1>

            <p className="text-xl text-charcoal-700 font-medium mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-charcoal-500 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="hairline mb-8" />

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-charcoal-500 mb-3 font-medium">
                Tone: <span className="text-charcoal-800 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === v
                        ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                        : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-charcoal-500 mb-3 font-medium">Quantity</p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gold-500 text-white text-xs tracking-widest-xl uppercase font-medium hover:bg-gold-600 transition-colors mb-6"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: ShieldCheck, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-charcoal-400">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-charcoal-100">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.careInstructions}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shippingInfo}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">Complete the Look</p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800" style={{ fontWeight: 400 }}>
              You May Also Like
            </h2>
            <div className="hairline max-w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-cream-200 overflow-hidden">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[${p.id}-related-name] gold jewelry elegant product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover product-img-zoom"
                  />
                </div>
                <p id={`${p.id}-related-name`} className="font-serif text-sm tracking-widest-xl uppercase text-charcoal-800 mt-3 text-center">
                  {p.name}
                </p>
                <p className="text-sm text-charcoal-500 text-center mt-1">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
