import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';
import products from '@/data/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm tracking-wider text-oxford">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-taupe" /> : <ChevronDown className="w-4 h-4 text-taupe" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-mocha/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === productId);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedVariant(0);
    setQuantity(1);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-24 pb-20 text-center">
        <p className="text-mocha">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm font-medium text-bronze underline">Back to Shop</Link>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="py-4">
          <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-taupe hover:text-bronze transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[4/5] bg-sand/40 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mocha/20 via-bronze/10 to-gold-light/15 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-gold/25" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-gold-light/20 -translate-y-4" />
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => {}}
                  className={`w-16 h-16 rounded-sm overflow-hidden transition-all duration-300 ${
                    i === 0 ? 'ring-1 ring-bronze ring-offset-2 ring-offset-cream' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-sand/60 to-pearl/70" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-taupe mb-2">{product.category}</p>
            <h1 className="product-name text-2xl lg:text-3xl font-semibold text-oxford leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
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
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-semibold text-oxford">${product.price}</p>

            {/* Short description */}
            <p className="mt-4 text-sm text-mocha/70 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-oxford mb-3">
                Finish: <span className="text-taupe font-normal">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 ${
                      i === selectedVariant
                        ? 'bg-oxford text-cream border-oxford'
                        : 'text-mocha border-sand hover:border-mocha/40'
                    }`}
                  >
                    {v === 'Gold' ? 'Warm Gold' : v === 'Silver' ? 'Sterling Silver' : v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sand rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-mocha hover:text-oxford transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-oxford">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-mocha hover:text-oxford transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors duration-300 ${
                  added
                    ? 'bg-green-700 text-cream'
                    : 'bg-oxford text-cream hover:bg-oxford-light'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added!' : `Add to Bag — $${(product.price * quantity).toFixed(2)}`}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-oxford mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-oxford mb-1">Care</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-oxford mb-1">Shipping</p>
                    <p>Complimentary worldwide shipping on all orders over $50. Estimated delivery: 5-10 business days.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-oxford mb-1">Returns</p>
                    <p>30-day hassle-free returns. Items must be unworn and in original packaging. Contact us to initiate a return.</p>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-2">You May Also Like</p>
            <h2 className="font-serif text-2xl lg:text-3xl text-oxford">Complete the Look</h2>
            <div className="mt-3 w-[60px] h-[1px] bg-gold/40 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
