import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Heart, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, getFeatured } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setOpenAccordion(null);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getFeatured()
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
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
            <h4 className="font-medium text-espresso mb-2">Materials</h4>
            <p className="text-charcoal">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Care Instructions</h4>
            <p className="text-charcoal">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-espresso mb-2">Shipping</h4>
            <p className="text-charcoal">
              Free standard shipping on all orders. Express shipping available at checkout for an additional fee. Orders typically ship within 1-2 business days.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Returns</h4>
            <p className="text-charcoal">
              We offer a 30-day return policy for unworn items in original packaging. Contact our customer service team to initiate a return.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-sand pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container py-4 border-b border-linen">
        <nav className="flex items-center gap-2 text-sm text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-ivory overflow-hidden">
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
                    className={`w-20 h-20 md:w-24 md:h-24 border-2 overflow-hidden transition-colors ${
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
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold text-white text-xs tracking-wider uppercase mb-4">
                {product.badge}
              </span>
            )}

            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-espresso mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-linen'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-espresso mb-6">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-charcoal mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Divider */}
            <div className="divider mb-8" />

            {/* Variants */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-espresso mb-3">
                Finish
              </label>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className="px-5 py-2 border border-linen text-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-espresso mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-charcoal font-medium min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors"
              >
                Add to Bag
              </button>
              <button
                className="p-4 border border-linen hover:border-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-charcoal hover:text-gold transition-colors" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-linen">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-2 text-gold" />
                <p className="text-xs text-stone">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto mb-2 text-gold" />
                <p className="text-xs text-stone">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2 text-gold" />
                <p className="text-xs text-stone">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-linen">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-espresso">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    {typeof item.content === 'string' ? (
                      <p className="text-charcoal">{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="section-spacing bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Complete Your Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-espresso">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
