import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || 'Gold');
    }
    setSelectedImage(0);
    setQuantity(1);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-taupe hover:text-charcoal underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setTimeout(() => setIsAdding(false), 1500);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-sans font-medium text-charcoal mb-2">Materials</h4>
            <p className="text-taupe font-sans text-sm">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-sans font-medium text-charcoal mb-2">Care Instructions</h4>
            <p className="text-taupe font-sans text-sm">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4 text-sm text-taupe font-sans">
          <p><strong className="text-charcoal">Free Shipping:</strong> On all orders over $50</p>
          <p><strong className="text-charcoal">Standard Delivery:</strong> 5-7 business days</p>
          <p><strong className="text-charcoal">Express Delivery:</strong> 2-3 business days</p>
          <p><strong className="text-charcoal">Returns:</strong> 30-day hassle-free returns</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm font-sans">
          <ol className="flex items-center gap-2 text-taupe">
            <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-champagne/20 overflow-hidden">
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
                    className={`w-20 h-20 bg-champagne/20 overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-charcoal' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-charcoal text-cream text-xs font-sans font-medium tracking-wide mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="product-name text-charcoal text-lg">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-sans font-medium text-charcoal">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-6 text-taupe font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-sm font-sans font-medium text-charcoal mb-3">
                  Finish: <span className="font-normal text-taupe">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-sm font-sans transition-all ${
                        selectedVariant === variant
                          ? 'bg-charcoal text-cream'
                          : 'border border-sand text-charcoal hover:border-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm font-sans font-medium text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-sand">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-taupe hover:text-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-sans text-charcoal">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-taupe hover:text-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full mt-8 py-4 bg-charcoal text-cream font-sans font-medium tracking-wide transition-all duration-300 hover:bg-espresso disabled:opacity-70"
            >
              {isAdding ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-sand">
              <div className="flex items-center gap-2 text-taupe">
                <Truck className="w-4 h-4" />
                <span className="text-xs font-sans">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <RotateCcw className="w-4 h-4" />
                <span className="text-xs font-sans">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-taupe">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-sans">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordionItems.map(item => (
                <div key={item.id} className="border-b border-sand">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-taupe transition-transform ${
                        activeAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    {typeof item.content === 'string' ? (
                      <p className="text-sm text-taupe font-sans leading-relaxed">{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-24 pt-12 border-t border-sand">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
