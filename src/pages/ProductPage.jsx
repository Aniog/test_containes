import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const accordionItems = [
  {
    id: 'description',
    title: 'Description',
    content: (product) => product.longDescription,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (product) => (
      <>
        <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
        <p><strong>Care:</strong> {product.care}</p>
      </>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: (product) => (
      <>
        <p className="mb-3">{product.shipping}</p>
        <p>Not in love? Return within 30 days for a full refund. Items must be in original condition with tags attached.</p>
      </>
    ),
  },
];

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading-xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-wide py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="container-wide pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-2 transition-all ${
                    activeImage === index
                      ? 'border-gold-500'
                      : 'border-charcoal-100 hover:border-charcoal-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${image.id}`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-charcoal-100 overflow-hidden">
              <img
                data-strk-img-id={`main-${product.images[activeImage].id}`}
                data-strk-img={product.images[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Badges */}
            {product.isNew && (
              <span className="inline-block bg-gold-500 text-cream-50 text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1 mb-4">
                New Arrival
              </span>
            )}

            <h1 className="font-serif text-heading-lg md:text-heading-xl uppercase tracking-[0.1em] text-charcoal-800">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-700 mt-3">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-charcoal-600 leading-relaxed mt-6">
              {product.description}
            </p>

            <div className="hairline-divider my-6" />

            {/* Variant Selector */}
            <div>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-charcoal-500 mb-3">
                Tone: <span className="text-charcoal-800 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-6 py-2.5 border text-xs tracking-[0.15em] uppercase font-sans transition-all ${
                      selectedVariant === variant.id
                        ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                        : 'border-charcoal-300 text-charcoal-600 hover:border-charcoal-500'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-charcoal-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 font-sans text-sm font-medium text-charcoal-800 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8 py-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-charcoal-100">
              <div className="text-center">
                <Truck size={20} className="text-gold-600 mx-auto mb-2" />
                <p className="font-sans text-[10px] tracking-wider uppercase text-charcoal-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={20} className="text-gold-600 mx-auto mb-2" />
                <p className="font-sans text-[10px] tracking-wider uppercase text-charcoal-500">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={20} className="text-gold-600 mx-auto mb-2" />
                <p className="font-sans text-[10px] tracking-wider uppercase text-charcoal-500">Hypoallergenic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <div className="hairline-divider" />
          {accordionItems.map(item => (
            <div key={item.id}>
              <button
                onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-serif text-lg uppercase tracking-[0.1em] text-charcoal-800">
                  {item.title}
                </span>
                {openAccordion === item.id ? (
                  <ChevronUp size={18} className="text-charcoal-400" />
                ) : (
                  <ChevronDown size={18} className="text-charcoal-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === item.id ? 'max-h-[500px] pb-6' : 'max-h-0'
                }`}
              >
                <div className="font-sans text-sm text-charcoal-600 leading-relaxed">
                  {typeof item.content === 'function' ? item.content(product) : item.content}
                </div>
              </div>
              <div className="hairline-divider" />
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-heading-lg text-charcoal-800 text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
