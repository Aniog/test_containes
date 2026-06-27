import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-espresso">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:text-gold-dark transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-walnut">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-ivory flex items-center justify-center">
              <span className="text-sm text-muted uppercase tracking-wider">{product.name}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-ivory flex items-center justify-center cursor-pointer hover:ring-1 hover:ring-gold transition-all">
                  <span className="text-[9px] text-muted">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1 className="font-serif text-2xl md:text-3xl text-espresso uppercase tracking-wider">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-hairline'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-espresso">${product.price}</p>

            <p className="mt-4 text-sm text-walnut leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-espresso text-espresso bg-ivory'
                        : 'border-hairline text-muted hover:border-walnut hover:text-walnut'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-walnut hover:text-espresso transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-2.5 text-sm text-espresso min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-walnut hover:text-espresso transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-cream text-xs uppercase tracking-widest font-medium py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="mt-3 text-xs text-muted text-center">Free shipping on all orders</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              {[
                { key: 'description', title: 'Description', content: product.details },
                { key: 'care', title: 'Materials & Care', content: product.care },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day returns — items must be unworn and in original packaging.' },
              ].map((acc) => (
                <div key={acc.key} className="border-b border-hairline">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm text-espresso font-medium">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-200 ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-walnut leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24 pt-12 border-t border-hairline">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-ivory mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-muted uppercase tracking-wider group-hover:scale-105 transition-transform duration-300">{p.category}</span>
                </div>
                <h3 className="font-serif text-sm text-espresso uppercase tracking-wider">{p.name}</h3>
                <p className="text-sm text-walnut mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
