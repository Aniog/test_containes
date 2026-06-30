import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Accordion, { AccordionGroup } from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setAddedToCart(false);
  }, [id]);

  if (!product) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="font-serif text-2xl text-warm-800 mb-4">Product not found</h1>
        <Link to="/shop" className="text-gold-500 hover:text-gold-600 underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, quantity, selectedVariant);
    
    setTimeout(() => {
      setIsAdding(false);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }, 500);
  };

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-cream-50">
      <div className="section-container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-warm-500">
            <li>
              <Link to="/" className="hover:text-warm-800 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-warm-800 transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link 
                to={`/shop?category=${product.category}`} 
                className="hover:text-warm-800 transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-warm-800">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-cream-100 overflow-hidden group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'border-gold-400'
                        : 'border-transparent hover:border-warm-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
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
          <div className="lg:py-8">
            {/* Category */}
            <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-2">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-warm-800 mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-warm-800 mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-warm-200'}
                  />
                ))}
              </div>
              <span className="text-warm-600 text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-warm-600 leading-relaxed mb-8">
              {product.shortDescription || product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-warm-800 mb-3">
                  Finish: <span className="text-warm-600 font-normal capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-xs uppercase tracking-wide border transition-all ${
                        selectedVariant === variant
                          ? 'border-warm-900 bg-warm-900 text-white'
                          : 'border-warm-300 text-warm-800 hover:border-warm-800'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-warm-800 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-warm-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-600 hover:text-warm-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-600 hover:text-warm-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="full"
              loading={isAdding}
              className="py-4 mb-4"
            >
              {addedToCart ? 'Added to Bag!' : 'Add to Bag'}
            </Button>

            {/* Additional CTA */}
            <Button
              variant="secondary"
              size="full"
              className="py-4"
            >
              Buy it as a Gift
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionGroup>
                <Accordion title="Description" defaultOpen>
                  <p className="leading-relaxed">{product.description}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-3">{product.materials}</p>
                  <p>{product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <div className="space-y-2">
                    <p><strong>Free Shipping:</strong> On orders over $75</p>
                    <p><strong>Standard Delivery:</strong> 5-7 business days</p>
                    <p><strong>Express Delivery:</strong> 2-3 business days</p>
                    <p><strong>Returns:</strong> 30 days from delivery</p>
                    <p className="text-xs text-warm-500 mt-2">
                      Free returns on all domestic orders
                    </p>
                  </div>
                </Accordion>
              </AccordionGroup>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-pearl">
            <h2 className="font-serif text-2xl md:text-3xl text-warm-800 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
