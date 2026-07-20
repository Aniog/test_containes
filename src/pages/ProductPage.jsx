import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-charcoal mb-4">Product Not Found</p>
        <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
      </div>
    );
  }

  const variant = selectedVariant || product.variant;
  const related = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, variant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key) => {
    setActiveAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div className="section-padding pt-28 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-wider text-taupe mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-sand/20 overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-gold/20 via-sand/30 to-rose/10 flex items-center justify-center">
                <span className="font-serif text-8xl text-gold/20 select-none">V</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 bg-sand/20 overflow-hidden border border-transparent hover:border-gold/50 transition-colors"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gold/15 to-rose/5" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-charcoal mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-taupe mb-4">{product.category}</p>

            {/* Price & Rating */}
            <p className="text-2xl font-light text-charcoal mb-4">${product.price}</p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-sand text-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-taupe leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-charcoal mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase border transition-all ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-sand text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-sand flex items-center justify-center hover:border-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-sand flex items-center justify-center hover:border-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              <ShoppingBag className="w-4 h-4 mr-2" />
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            <p className="text-xs text-center text-taupe">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-t border-sand mt-10 pt-6 space-y-1">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'care', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((acc) => (
                <div key={acc.key} className="border-b border-sand/50">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
                  >
                    {acc.label}
                    {activeAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="max-w-6xl mx-auto mt-20 pt-16 border-t border-sand">
          <p className="font-serif text-2xl text-charcoal text-center mb-10">You May Also Like</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
