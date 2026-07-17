import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronRight } from 'lucide-react';
import { getProduct, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-velmora-charcoal font-medium">
          {title}
        </span>
        {open ? (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronRight className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-smoke leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addItem, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-md mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  return (
    <main className="pt-24 md:pt-32 pb-20 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-velmora-sand mb-4 overflow-hidden">
              <div className={`w-full h-full bg-gradient-to-br transition-all duration-500 ${
                activeImage % 2 === 0
                  ? 'from-velmora-gold/30 to-velmora-gold/5'
                  : 'from-velmora-gold/20 to-velmora-charcoal/5'
              }`} />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border transition-colors ${
                    i === activeImage ? 'border-velmora-charcoal' : 'border-transparent hover:border-velmora-mist'
                  }`}
                >
                  <div className={`w-full h-full bg-velmora-sand ${
                    i % 2 === 0 ? 'bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/5' : 'bg-gradient-to-tl from-velmora-gold/15 to-velmora-charcoal/5'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase leading-tight text-velmora-charcoal mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-mist/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-stone">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-xl text-velmora-charcoal mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-velmora-smoke leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-velmora-charcoal font-medium mb-3">
                Finish: <span className="text-velmora-stone">{selectedVariant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === v.value
                        ? 'border-velmora-charcoal text-velmora-charcoal bg-velmora-charcoal/5'
                        : 'border-velmora-border text-velmora-stone hover:border-velmora-stone'
                    }`}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
                      style={{ backgroundColor: v.color }}
                    />
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-velmora-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-center text-sm tracking-wider uppercase transition-all duration-300 font-sans font-medium ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-goldDark'
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
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
        {related.length > 0 && (
          <section className="mt-24 md:mt-32 pt-16 border-t border-velmora-border">
            <div className="text-center mb-12">
              <p className="caption mb-3">Complete the Look</p>
              <h2 className="heading-md text-velmora-charcoal">You May Also Like</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                  <div className="aspect-square bg-velmora-sand mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-gold/20 to-velmora-gold/5 group-hover:from-velmora-gold/30 group-hover:to-velmora-gold/10 transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-charcoal">
                    {rp.name}
                  </h3>
                  <p className="text-sm text-velmora-stone mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
