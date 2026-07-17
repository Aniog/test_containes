import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Star } from 'lucide-react';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/products/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  
  const { addItem } = useCart();

  useEffect(() => {
    if (product && product.variants?.length > 0) {
      setSelectedVariant(product.variants[0].value);
    }
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/collection" className="btn-gold">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (isAdding) return;
    setIsAdding(true);
    addItem(product, selectedVariant || 'gold', quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Materials:
• 18K Gold Plated over Sterling Silver
• Cubic Zirconia Crystals
• Hypoallergenic

Care Instructions:
• Store in a cool, dry place
• Clean gently with a soft cloth
• Avoid contact with water, perfumes, and chemicals
• Remove before swimming or exercising`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Shipping:
• Free worldwide shipping on all orders
• Standard delivery: 5-7 business days
• Express delivery: 2-3 business days

Returns:
• 30-day return policy
• Items must be unworn and in original packaging
• Free return shipping label included
• Refunds processed within 5-7 business days`,
    },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="container-wide py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-warm-gray">
            <li>
              <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/collection" className="hover:text-charcoal transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-cream overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
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
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pl-4">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-xl md:text-2xl mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl">${product.price}</span>
                {product.comparePrice && (
                  <span className="text-warm-gray line-through">${product.comparePrice}</span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <p className="text-warm-gray leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-ultra-wide uppercase text-charcoal mb-3">
                  Finish: <span className="text-warm-gray capitalize">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.value}
                      onClick={() => setSelectedVariant(variant.value)}
                      className={`px-4 py-2 text-xs tracking-wider border transition-colors ${
                        selectedVariant === variant.value
                          ? 'border-charcoal bg-charcoal text-ivory'
                          : 'border-hairline hover:border-charcoal'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-ultra-wide uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                {isAdding ? 'Added to Bag!' : 'Add to Bag'}
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Heart size={18} />
                Add to Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 py-4 border-y border-hairline">
              <span className="text-xs text-warm-gray">Free Shipping</span>
              <span className="text-xs text-warm-gray">30-Day Returns</span>
              <span className="text-xs text-warm-gray">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-hairline">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wide">{accordion.title}</span>
                    {activeAccordion === accordion.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  {activeAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-warm-gray whitespace-pre-line">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl">You May Also Like</h2>
              <div className="w-12 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
