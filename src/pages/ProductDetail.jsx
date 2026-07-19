import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ShoppingBag, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-velmora-text">{title}</span>
        <ChevronDown className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="font-sans text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-base">
        <div className="text-center">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Browse All Jewelry</Link>
        </div>
      </div>
    );
  }

  const currentVariant = selectedVariant || product.variants[0];
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="min-h-screen bg-velmora-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs font-sans text-velmora-muted uppercase tracking-wider">
          <Link to="/" className="hover:text-velmora-text transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-text transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left — Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-velmora-accent-light rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[120px] md:text-[180px] text-velmora-accent/15 uppercase tracking-wider select-none">
                  {product.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-velmora-accent-light rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-2xl text-velmora-accent/20">{i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-divider'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted font-sans">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="font-sans text-xl font-medium mb-6">${product.price}</p>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-velmora-muted mb-3">Tone</p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs uppercase tracking-widest font-sans border transition-all duration-300 ${
                        currentVariant === v
                          ? 'border-velmora-text bg-velmora-text text-white'
                          : 'border-velmora-divider text-velmora-text hover:border-velmora-text'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center hover:border-velmora-text transition-colors text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center hover:border-velmora-text transition-colors text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={() => addToCart(product, currentVariant, quantity)}
                className="flex-1 btn-primary py-4 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
                  liked ? 'border-red-400 bg-red-50' : 'border-velmora-divider hover:border-velmora-text'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-red-400 text-red-400' : 'text-velmora-text'}`} />
              </button>
            </div>

            {/* Accordions */}
            <Accordion title="Description">
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><strong className="text-velmora-text">Materials:</strong> {product.materials}</p>
              <p><strong className="text-velmora-text">Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 5–10 business days depending on your location. We offer 30-day hassle-free returns on all unworn items in their original packaging.</p>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="section-title text-center mb-10 md:mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velmora-accent-light rounded-sm overflow-hidden mb-3 flex items-center justify-center">
                    <span className="font-serif text-5xl text-velmora-accent/20 uppercase tracking-wider group-hover:scale-110 transition-transform duration-500">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="product-name text-xs mb-1 group-hover:text-velmora-accent transition-colors">{p.name}</h3>
                  <p className="font-sans text-sm font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
