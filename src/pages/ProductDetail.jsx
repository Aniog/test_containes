import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-gold hover:text-gold-deep underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
    });
    setAddedToCart(true);
    openDrawer();
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordionItems = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: product.materials },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-taupe mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[#D4B87A]/30 via-[#E8E2D9] to-[#B8965E]/20 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold-deep font-serif text-4xl">V</span>
                </div>
                <p className="text-taupe text-xs tracking-wider uppercase">{product.category}</p>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-lg bg-[#E8E2D9] flex items-center justify-center cursor-pointer border border-border hover:border-gold transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold-deep font-serif text-sm">V</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              {product.new && (
                <span className="inline-block bg-espresso text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded mb-3">
                  New
                </span>
              )}
              {product.bestseller && !product.new && (
                <span className="inline-block bg-gold text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded mb-3">
                  Bestseller
                </span>
              )}
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wider text-espresso uppercase mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-espresso mb-6">${product.price}</p>

            <p className="text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs font-medium text-espresso tracking-wider uppercase mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 rounded text-sm font-medium transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-espresso text-white'
                        : 'border border-border text-taupe hover:border-gold hover:text-espresso'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gold/5 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4 text-espresso" />
                </button>
                <span className="px-4 text-sm text-espresso min-w-[44px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gold/5 transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4 text-espresso" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gold hover:bg-gold-deep text-white text-sm font-medium tracking-wider uppercase py-3 px-8 rounded transition-all duration-300 flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Bag
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>

              <button
                className="p-3 border border-border rounded hover:border-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-taupe hover:text-gold transition-colors" />
              </button>
            </div>

            {/* Details */}
            <p className="text-xs text-taupe mb-4">{product.details}</p>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === item.key ? '' : item.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-medium text-espresso tracking-wider uppercase">
                      {item.label}
                    </span>
                    <Plus
                      className={`w-4 h-4 text-taupe transition-transform duration-300 ${
                        activeAccordion === item.key ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.key ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-border">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-espresso tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}