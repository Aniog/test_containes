import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function StarRating({ rating, size = 'sm' }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size === 'sm' ? 14 : 16}
          className={i < Math.floor(rating) ? 'text-gold fill-gold' : 'text-stone/20'}
        />
      ))}
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone/10">
      <button
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-80 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-warm-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-stone/20'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[11px] uppercase tracking-[0.25em] text-stone font-medium">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mt-2 font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} />
              <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            <p className="text-sm text-stone leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest font-medium text-charcoal block mb-3">
                Finish: <span className="text-gold">{variant === 'gold' ? '18K Gold' : 'Silver'}</span>
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
                    variant === 'gold'
                      ? 'border-gold bg-gold text-white'
                      : 'border-stone/20 text-charcoal hover:border-gold'
                  }`}
                >
                  18K Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all duration-300 ${
                    variant === 'silver'
                      ? 'border-stone/40 bg-stone text-white'
                      : 'border-stone/20 text-charcoal hover:border-stone/40'
                  }`}
                >
                  Silver Tone
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest font-medium text-charcoal">Qty</span>
                <div className="flex items-center border border-stone/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-sm hover:bg-stone/5 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-sm hover:bg-stone/5 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                <ShoppingBag size={16} />
                {added ? 'Added to Cart!' : 'Add to Cart — $' + (product.price * quantity).toFixed(0)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone/10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K Gold Plated over Sterling Silver</p>
                <p className="mt-2">Hypoallergenic. Nickel-free. Lead-free.</p>
                <p className="mt-2">Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Gently clean with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders over $50.</p>
                <p className="mt-2">Orders are processed within 1-2 business days.</p>
                <p className="mt-2">30-day return window for unworn items in original packaging. Refunds processed within 5-7 business days.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20 pt-16 border-t border-stone/10">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light">You May Also Like</h2>
              <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="aspect-square overflow-hidden bg-warm-white mb-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[11px] uppercase tracking-widest text-charcoal font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone mt-0.5">${item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}