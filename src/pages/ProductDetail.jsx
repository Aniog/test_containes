import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight, Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-warm-white">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-accent hover:underline text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
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
      content: `${product.materials} ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders over $50. Standard delivery 5–7 business days. Express available at checkout. 30-day hassle-free returns.',
    },
  ];

  return (
    <main className="bg-base min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs text-taupe font-sans">
          <Link to="/" className="hover:text-warm-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-warm-white transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-warm-white/60">{product.name}</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-surface rounded-lg overflow-hidden mb-4">
              <img
                src={`https://placehold.co/800x1000/1A1918/C8A97E?text=${encodeURIComponent(product.name)}+${activeImage + 1}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://placehold.co/160x160/1A1918/C8A97E?text=${idx + 1}`}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            {product.badge && (
              <span className="inline-block bg-accent text-base text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-warm-white">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-accent text-accent" />
                <span className="text-sm text-warm-white">{product.rating}</span>
              </div>
              <span className="text-sm text-taupe">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="font-serif text-2xl text-warm-white">${product.price}</span>
              {product.originalPrice && (
                <span className="font-serif text-xl text-taupe line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="mt-6 text-sm text-taupe leading-relaxed font-sans font-light">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-white">
                Metal Tone
              </span>
              <div className="flex gap-3 mt-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium capitalize border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-divider text-warm-white/70 hover:border-warm-white/40'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-warm-white">
                Quantity
              </span>
              <div className="flex items-center mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-divider rounded-l text-warm-white/60 hover:text-warm-white"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center border-t border-b border-divider text-sm text-warm-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-divider rounded-r text-warm-white/60 hover:text-warm-white"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-accent text-base font-sans font-semibold text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors rounded"
            >
              Add to Cart — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Trust icons */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs text-taupe">
                <Truck size={16} className="text-accent flex-shrink-0" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-taupe">
                <RotateCcw size={16} className="text-accent flex-shrink-0" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-taupe">
                <ShieldCheck size={16} className="text-accent flex-shrink-0" />
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-warm-white uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-warm-white/40 text-lg">
                      {openAccordion === item.key ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="text-sm text-taupe leading-relaxed font-sans font-light">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-divider bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-warm-white text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
