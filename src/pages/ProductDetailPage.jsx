import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-wide font-semibold text-charcoal hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-60 pb-4' : 'max-h-0'
        )}
      >
        <p className="font-sans text-sm text-warm-gray leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    const p = getProductBySlug(slug);
    if (!p) {
      navigate('/shop');
      return;
    }
    setProduct(p);
    setSelectedVariant(p.variants[0]);
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!product) return null;

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24 bg-surface">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs font-sans text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream rounded-sm overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors',
                      activeImage === i ? 'border-gold' : 'border-transparent hover:border-border'
                    )}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal tracking-wide uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} showCount count={product.reviewCount} />
            </div>
            <p className="font-sans text-2xl font-semibold text-charcoal mt-4">
              {formatPrice(product.price)}
            </p>
            <p className="font-sans text-sm text-warm-gray mt-4 leading-relaxed">
              {product.tagline}
            </p>

            <div className="w-full h-px bg-border-light my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wide font-semibold text-charcoal mb-3">
                Tone: <span className="font-normal text-warm-gray">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      'px-5 py-2 text-xs font-sans uppercase tracking-wide border rounded-full transition-all',
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-border text-warm-gray hover:border-charcoal hover:text-charcoal'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wide font-semibold text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-sans text-sm text-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-charcoal text-white text-xs font-sans font-semibold uppercase tracking-wide hover:bg-gold transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="w-full h-px bg-border-light my-6" />

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}{'\n\n'}{product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}{'\n\n'}{product.returns}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 pt-16 border-t border-border-light">
            <div className="text-center mb-12">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
