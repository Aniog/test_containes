import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    content: (product) => product.description,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (product) => `${product.materials}\n\nCare: ${product.care}`,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (product) => product.shipping,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find((p) => p.id === id);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 section-padding text-center">
        <h1 className="font-serif text-heading-2 text-brand-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.colors[selectedColor].name, quantity);
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto section-padding py-8 md:py-14">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-ultra-wide text-brand-warm-gray">
            <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-brand-charcoal">{product.name}</span>
          </div>
        </nav>

        {/* Main product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-brand-cream overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.imgAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'w-20 h-20 bg-brand-cream cursor-pointer border-2 transition-colors',
                    i === 0 ? 'border-brand-gold' : 'border-transparent hover:border-brand-mid-gray'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`${product.id}-detail-name`}
              className="font-serif text-heading-1 text-brand-charcoal tracking-wide uppercase"
            >
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-brand-charcoal mt-3">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-mid-gray'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-brand-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p
              id={`${product.id}-detail-desc`}
              className="font-sans text-sm text-brand-warm-gray leading-relaxed mt-5 max-w-md"
            >
              {product.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-brand-mid-gray/40 my-6" />

            {/* Color selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-3">
                Tone: {product.colors[selectedColor].name}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={cn(
                      'px-5 py-2 border font-sans text-[11px] uppercase tracking-ultra-wide transition-all',
                      selectedColor === i
                        ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                        : 'border-brand-mid-gray text-brand-warm-gray hover:border-brand-charcoal'
                    )}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-mid-gray">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-warm-gray hover:text-brand-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={14} strokeWidth={1.5} className="text-brand-gold" />
                  <span className="font-sans text-[10px] uppercase tracking-ultra-wide text-brand-warm-gray">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-mid-gray/40">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-brand-mid-gray/40">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4"
                  >
                    <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-brand-charcoal">
                      {item.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        'text-brand-warm-gray transition-transform duration-300',
                        openAccordion === item.id && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    )}
                  >
                    <p className="font-sans text-sm text-brand-warm-gray leading-relaxed whitespace-pre-line">
                      {item.content(product)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-heading-2 text-brand-charcoal">Complete the Look</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
