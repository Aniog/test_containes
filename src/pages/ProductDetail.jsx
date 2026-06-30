import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight, Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-100/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-charcoal-900 uppercase tracking-wide">
          {title}
        </span>
        <span className="text-charcoal-400 text-lg leading-none transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-charcoal-600 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-gold-400 text-gold-400'
                : 'text-charcoal-200'
            }`}
          />
        ))}
      </div>
      <span className="text-charcoal-500 text-xs">({count} reviews)</span>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant('gold');
    setQuantity(1);
    setActiveImage(0);
    setAddedToCart(false);
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    let cleanup;
    const load = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const config = (await import('@/strk-img-config.json')).default;
        if (config && Object.keys(config).length > 0) {
          cleanup = ImageHelper.loadImages(config, containerRef.current);
        }
      } catch {}
    };
    load();
    return () => { if (typeof cleanup === 'function') cleanup(); };
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-3xl text-charcoal-950 mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold-600 text-sm uppercase tracking-wide hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal-900 capitalize">{product.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-square bg-cream-100 overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-primary`}
                data-strk-img={`[product-${product.id}-name] ${product.category} jewelry ${product.material}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  activeImage === 1 ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img
                data-strk-img-id={`product-${product.id}-hover`}
                data-strk-img={`[product-${product.id}-name] ${product.category} worn model elegant`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} styled`}
                className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${
                  activeImage === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div className="flex gap-2">
              {[
                { index: 0, label: 'Front View' },
                { index: 1, label: 'Styled Look' },
              ].map(({ index, label }) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-1 py-2.5 text-xs uppercase tracking-wide font-medium transition-all duration-200 border ${
                    activeImage === index
                      ? 'border-charcoal-950 bg-charcoal-950 text-cream-50'
                      : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-2">
              {product.category}
            </p>
            <h1 id="pdp-name" className="font-product-name text-charcoal-950 text-2xl md:text-3xl mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-charcoal-950 text-xl font-medium">{formatPrice(product.price)}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
              {product.descriptionShort}
            </p>

            <div className="divider-hairline mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-charcoal-700 text-xs uppercase tracking-wide font-medium mb-3">
                Finish
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-5 py-2 text-xs uppercase tracking-wide font-medium transition-all duration-200 border ${
                      selectedVariant === v.id
                        ? 'border-charcoal-950 bg-charcoal-950 text-cream-50'
                        : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-charcoal-700 text-xs uppercase tracking-wide font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant={addedToCart ? 'accent' : 'primary'}
              size="xl"
              fullWidth
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </Button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-100/50">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: ShieldCheck, text: 'Hypoallergenic' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
                  <span className="text-charcoal-500 text-[10px] uppercase tracking-wide">{text}</span>
                </div>
              ))}
            </div>

            <div className="divider-hairline mt-6 mb-2" />

            {/* Accordions */}
            <AccordionItem title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">{product.details}</p>
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              <p>{product.care}</p>
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              <p>{product.shipping}</p>
            </AccordionItem>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-brand-100/50">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
