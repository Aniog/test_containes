import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, ChevronLeft, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductBySlug, products } from '../../data/products';
import StarRating from '../ui/StarRating';
import Accordion from '../ui/Accordion';
import ProductCard from './ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-obsidian mb-4">Product not found</h1>
          <Link to="/shop" className="text-champagne hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || Math.random() > 0.5))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/shop" 
          className="inline-flex items-center text-sm text-velvet-600 hover:text-obsidian transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velvet-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage].src}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Title & Rating */}
            <div className="mb-6">
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />
              <h1 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mt-3 mb-2 uppercase tracking-wide">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-obsidian">
                ${product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-velvet-700 font-sans leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-sans font-medium text-obsidian mb-3">
                Finish: <span className="text-velvet-600">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all ${
                      selectedVariant === variant
                        ? 'bg-obsidian text-cream'
                        : 'bg-velvet-100 text-velvet-700 hover:bg-velvet-200'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-sans font-medium text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-300 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-600 hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-600 hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-champagne text-obsidian font-sans font-medium text-sm tracking-wide rounded transition-all hover:bg-champagne-light hover:shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Bag
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border rounded transition-all ${
                  isWishlisted
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-velvet-300 text-velvet-600 hover:border-velvet-400'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button
                className="p-4 border border-velvet-300 rounded text-velvet-600 hover:border-velvet-400 transition-all"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pb-8 border-b border-velvet-200">
              <span className="text-xs text-velvet-600 font-sans">✓ Free Shipping</span>
              <span className="text-xs text-velvet-600 font-sans">✓ 30-Day Returns</span>
              <span className="text-xs text-velvet-600 font-sans">✓ 18K Gold Plated</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="bg-velvet-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian">
              You May Also Like
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
