import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ChevronLeft } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-warm-dark mb-4">Product not found</p>
          <Link to="/collection" className="text-xs uppercase tracking-widest text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/collection"
          className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors mb-6"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-warm-border/20 overflow-hidden rounded-sm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-serif text-2xl lg:text-3xl text-warm-dark uppercase tracking-wider mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-border'}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-gold mb-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-warm-dark mb-3">
                Finish: <span className="text-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-wide border transition-all duration-300 ${
                      selectedVariant === v.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-border text-warm-dark hover:border-warm-gray'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center border border-warm-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-warm-gray hover:text-warm-dark transition-colors text-sm"
                >
                  −
                </button>
                <span className="px-4 py-3 text-sm font-sans text-warm-dark min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-warm-gray hover:text-warm-dark transition-colors text-sm"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-gold text-white hover:bg-gold/90'
                }`}
              >
                <ShoppingBag size={16} />
                {addedToCart ? 'Added!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <ProductAccordion product={product} />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-24 pt-16 border-t border-warm-border">
            <h2 className="font-serif text-2xl lg:text-3xl text-warm-dark text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-warm-border/20 overflow-hidden mb-3 rounded-sm">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-warm-dark mb-1">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-gold font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}