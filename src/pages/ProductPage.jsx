import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductBySlug, getProductsByCategory, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-linen">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-stone" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-stone" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="py-4 text-xs text-velmora-taupe">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 pb-16 lg:pb-24">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-velmora-linen rounded overflow-hidden">
              <div
                data-strk-img-id={`product-detail-${product.id}`}
                data-strk-img={`[pdp-name-${product.id}] [pdp-desc-${product.id}] ${product.imgSearchQuery}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full"
              >
                <div className="w-full h-full bg-gradient-to-br from-velmora-ivory to-velmora-sand flex items-center justify-center">
                  <span className="font-serif text-5xl text-velmora-gold-muted/40 tracking-widest-2xl">VM</span>
                </div>
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-velmora-linen rounded overflow-hidden cursor-pointer hover:ring-1 hover:ring-velmora-gold transition-all">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-velmora-gold-muted/40 text-xs">VM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
              {product.category}
            </p>
            
            <h1 id={`pdp-name-${product.id}`} className="font-serif text-3xl lg:text-heading-1 text-velmora-charcoal uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-charcoal mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p id={`pdp-desc-${product.id}`} className="text-sm text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-widest-xl text-velmora-stone mb-3">
                Tone: <span className="text-velmora-charcoal capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 text-xs uppercase tracking-wider font-sans transition-all duration-200 rounded ${
                      selectedVariant === variant.id
                        ? 'bg-velmora-charcoal text-white'
                        : variant.available
                          ? 'border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold'
                          : 'border border-velmora-sand/50 text-velmora-sand cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[10px] uppercase tracking-widest-xl text-velmora-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-velmora-stone" />
                </button>
                <span className="px-6 text-sm text-velmora-charcoal font-sans min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-velmora-stone" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-gold w-full text-center mb-8">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-velmora-linen mb-8">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-velmora-gold" />
                <span className="text-[10px] text-velmora-stone uppercase tracking-wider">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-velmora-gold" />
                <span className="text-[10px] text-velmora-stone uppercase tracking-wider">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-velmora-gold" />
                <span className="text-[10px] text-velmora-stone uppercase tracking-wider">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div>
              <AccordionItem title="Description" defaultOpen>
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="border-t border-velmora-linen py-16 lg:py-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl lg:text-heading-3 text-velmora-charcoal">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
