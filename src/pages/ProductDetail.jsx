import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  RotateCcw,
  Shield,
  ChevronDown,
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import useCartStore from '../store/cartStore';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCartStore();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-charcoal-500 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-sans text-sm tracking-wider uppercase hover:bg-charcoal-700 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // If not enough related in same category, add others
  if (relatedProducts.length < 4) {
    const others = products
      .filter((p) => p.id !== product.id && !relatedProducts.find((r) => r.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...others);
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-charcoal-400">
          <Link to="/" className="hover:text-gold-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border-2 transition-colors ${
                    activeImage === index
                      ? 'border-gold-500'
                      : 'border-ivory-300 hover:border-charcoal-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${index}`}
                    data-strk-img={`${product.name} ${product.subtitle} angle ${index + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src=""
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-[3/4] bg-ivory-200 overflow-hidden group">
              <img
                data-strk-img-id={`${product.id}-main-${activeImage}`}
                data-strk-img={`${product.name} ${product.subtitle} ${selectedVariant} jewelry product detailed view`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src=""
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setActiveImage(
                    activeImage === 0
                      ? product.images.length - 1
                      : activeImage - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-charcoal-600 hover:bg-white hover:text-gold-500 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setActiveImage(
                    activeImage === product.images.length - 1
                      ? 0
                      : activeImage + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-charcoal-600 hover:bg-white hover:text-gold-500 transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-500 mb-3">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-charcoal-800 mb-2">
              {product.name}
            </h1>

            <p className="text-sm text-charcoal-500 mb-4">
              {product.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-2xl font-medium text-charcoal-800">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-charcoal-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="font-sans text-sm font-medium text-charcoal-700 mb-3">
                Tone: <span className="font-normal text-charcoal-500">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedVariant(color.name)}
                    className={`flex items-center gap-2 px-5 py-2.5 border transition-colors ${
                      selectedVariant === color.name
                        ? 'border-gold-500 bg-gold-50 text-charcoal-800'
                        : 'border-ivory-300 hover:border-charcoal-300 text-charcoal-600'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-sm">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-sm font-medium text-charcoal-700 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ivory-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-600 hover:text-gold-500 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium text-charcoal-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-600 hover:text-gold-500 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-gold-500 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border transition-colors ${
                  isWishlisted
                    ? 'border-gold-500 bg-gold-50 text-gold-500'
                    : 'border-ivory-300 text-charcoal-600 hover:border-charcoal-300'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  size={20}
                  fill={isWishlisted ? 'currentColor' : 'none'}
                />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pb-8 border-b border-ivory-300">
              <div className="flex items-center gap-2 text-charcoal-500">
                <Truck size={16} />
                <span className="text-xs">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-500">
                <RotateCcw size={16} />
                <span className="text-xs">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-500">
                <Shield size={16} />
                <span className="text-xs">1 Year Warranty</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {[
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
                      <p className="mb-3">{product.materials}</p>
                      <p>{product.care}</p>
                    </>
                  ),
                },
                {
                  key: 'shipping',
                  title: 'Shipping & Returns',
                  content: product.shipping,
                },
              ].map((section) => (
                <div
                  key={section.key}
                  className="border-b border-ivory-300"
                >
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm font-medium text-charcoal-800 tracking-wider uppercase">
                      {section.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-charcoal-400 transition-transform ${
                        openAccordion === section.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === section.key
                        ? 'max-h-96 opacity-100 pb-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-sm text-charcoal-600 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-ivory-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
