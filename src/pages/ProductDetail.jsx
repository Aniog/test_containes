import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-warm-900 mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const images = product.images || [product.imageUrl];

  const handleAddToCart = () => {
    addItem(product, product.variants[0], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      title: 'Description',
      content: product.longDescription || product.description,
    },
    {
      title: 'Materials & Care',
      content: `Crafted in ${product.material} over recycled sterling silver. To maintain its brilliance, avoid contact with perfume, water, and chemicals. Store in the included pouch when not wearing. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days. We offer hassle-free 30-day returns — simply contact us to initiate a return for a full refund or exchange.',
    },
  ];

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding !py-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-warm-500 mb-8 md:mb-12">
          <Link to="/" className="hover:text-warm-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-warm-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-warm-100 overflow-hidden">
              <img
                src={images[selectedImage] || images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-warm-100 overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-warm-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:pt-4">
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">
              {product.category}
            </p>

            <h1
              className="font-serif text-display-sm md:text-[2.8rem] text-warm-900 mb-2 tracking-wide uppercase"
            >
              {product.name}
            </h1>

            <p
              className="text-sm text-warm-500 mb-5"
            >
              {product.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-300'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-warm-900 mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-warm-600 text-sm leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-warm-700 mb-3">
                Tone: {product.variants[0].name}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant.name}
                    className={`flex items-center gap-2.5 px-5 py-2.5 border transition-all duration-300 ${
                      i === 0
                        ? 'border-warm-900 bg-warm-900 text-white'
                        : 'border-warm-300 text-warm-700 hover:border-warm-500'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: variant.color, borderColor: i === 0 ? 'white' : variant.color }}
                    />
                    <span className="font-sans text-[11px] tracking-[0.15em] uppercase">
                      {variant.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-warm-700 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-warm-300 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-warm-500 hover:text-warm-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-warm-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-warm-500 hover:text-warm-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-gold text-white hover:bg-gold-dark hover:shadow-lg'
              }`}
            >
              {added ? 'Added to Bag!' : 'Add to Cart'}
            </button>

            {/* Accordion */}
            <div className="mt-10 border-t border-warm-200">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-warm-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-[12px] tracking-[0.15em] uppercase text-warm-800 font-medium">
                      {acc.title}
                    </span>
                    {activeAccordion === i ? (
                      <ChevronUp size={16} className="text-warm-500" />
                    ) : (
                      <ChevronDown size={16} className="text-warm-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === i ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-warm-600 text-sm leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-heading text-warm-900 mb-4">
                Complete Your Look
              </h2>
              <div className="w-16 h-px bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
