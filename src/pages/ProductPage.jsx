import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedVariant, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders.\n\n30-day hassle-free returns. Items must be unworn and in original packaging.' }
  ];

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-warm-gray">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent hover:border-hairline'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-2xl sm:text-3xl text-warm-black mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-charcoal">${product.price}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-hairline text-hairline'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-warm-gray mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-charcoal mb-3">
                  Finish: <span className="font-normal text-warm-gray">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-warm-black'
                          : 'border-hairline text-charcoal hover:border-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-hairline rounded w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-center min-w-[3rem]">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full py-4 bg-gold text-warm-black font-medium rounded hover:bg-gold-dark transition-colors disabled:bg-gold/50 flex items-center justify-center gap-2 mb-4"
            >
              {isAdding ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Bag
                </>
              ) : (
                'Add to Bag'
              )}
            </button>

            <p className="text-center text-sm text-warm-gray">
              Free shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12 border-t border-hairline pt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-hairline">
                  <button
                    onClick={() => setActiveAccordion(
                      activeAccordion === accordion.id ? null : accordion.id
                    )}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-medium text-charcoal">{accordion.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-warm-gray transition-transform ${
                        activeAccordion === accordion.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === accordion.id ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-warm-gray text-sm leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-warm-black text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
