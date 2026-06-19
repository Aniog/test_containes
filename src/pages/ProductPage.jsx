import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/shop/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-28 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl text-fg mb-4">Product not found</h1>
        <Link to="/shop" className="text-accent text-sm underline">Return to shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordionItems = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-3">{product.details}</p>
          <p className="text-xs text-muted-fg italic">{product.care}</p>
        </>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <>
          <p className="mb-2"><strong>Free worldwide shipping</strong> on all orders.</p>
          <p className="mb-2">Orders are dispatched within 1–2 business days. Standard delivery takes 5–10 business days depending on your location.</p>
          <p><strong>30-day returns:</strong> If you're not completely in love, return your piece within 30 days for a full refund. Items must be in original condition with packaging.</p>
        </>
      ),
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted-fg">
          <Link to="/" className="hover:text-fg transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-fg transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-fg">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-muted overflow-hidden mb-3">
              <img
                data-strk-img-id={`pdp-${product.id}-${activeImage}`}
                data-strk-img={`[${product.id}-name] detail product jewelry on white background`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-muted overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[${product.id}-name] angle ${i + 1} jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center py-2">
            {product.badge && (
              <span className="inline-block self-start text-[10px] font-medium tracking-[0.15em] uppercase text-accent border border-accent px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-fg tracking-wide uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size="sm" />
              <span className="text-xs text-muted-fg">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-xl md:text-2xl font-medium text-fg mt-4">
              {formatPrice(product.price)}
            </p>

            <p className="text-sm text-muted-fg mt-4 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mt-6">
              <label className="text-xs font-medium tracking-[0.1em] uppercase text-fg mb-2 block">
                Tone: {selectedColor}
              </label>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 text-xs font-medium tracking-[0.1em] uppercase border transition-all ${
                      selectedColor === color
                        ? 'bg-fg text-white border-fg'
                        : 'bg-surface text-fg border-border hover:border-fg'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <label className="text-xs font-medium tracking-[0.1em] uppercase text-fg mb-2 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted-fg hover:text-fg transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted-fg hover:text-fg transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full py-4 bg-accent text-accent-fg text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-[11px] text-muted-fg">
              <span>Free Worldwide Shipping</span>
              <span>30-Day Returns</span>
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 border-t border-border">
          {accordionItems.map(item => (
            <div key={item.key} className="border-b border-border">
              <button
                onClick={() => toggleAccordion(item.key)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-medium tracking-[0.1em] uppercase text-fg">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-fg transition-transform duration-200 ${
                    openAccordion === item.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === item.key && (
                <div className="pb-6 text-sm text-muted-fg leading-relaxed max-w-2xl">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-fg text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
