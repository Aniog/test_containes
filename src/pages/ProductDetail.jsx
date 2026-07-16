import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImage(0);
      setAddedToCart(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-gold underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: product.materials + '\n\nCare: Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Polish gently with a soft cloth.',
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 3–7 business days. Express available at checkout.\n\nReturns accepted within 30 days of delivery. Items must be unworn and in original packaging.',
    },
  ];

  const images = [
    { imgId: product.imgId, titleId: product.titleId, descId: product.descId },
    { imgId: product.imgId2, titleId: `${product.titleId}-2`, descId: `${product.descId}-2` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs font-sans text-obsidian-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-cream-deep overflow-hidden relative">
              {images.map((img, i) => (
                <img
                  key={img.imgId}
                  data-strk-img-id={img.imgId}
                  data-strk-img={`[${img.descId}] [${img.titleId}] gold jewelry product`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Hidden text for image queries */}
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.shortDescription}</span>
              <span id={`${product.titleId}-2`} className="sr-only">{product.name} worn</span>
              <span id={`${product.descId}-2`} className="sr-only">{product.shortDescription} model wearing</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-cream-deep overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-obsidian-200'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pt-4">
            {/* Category */}
            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="product-name text-2xl md:text-3xl text-obsidian mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-obsidian-200'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-obsidian-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-obsidian font-medium mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p className="font-sans text-sm text-obsidian-500 leading-relaxed mb-8 border-b border-obsidian-100 pb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian mb-3">
                Finish: <span className="text-gold font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs font-medium tracking-wide border transition-colors ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-cream'
                        : 'border-obsidian-200 text-obsidian hover:border-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-obsidian-200">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-obsidian-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-obsidian" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-obsidian-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-obsidian" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                addedToCart
                  ? 'bg-gold text-obsidian'
                  : 'bg-obsidian text-cream hover:bg-obsidian-700'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: '✦', label: '18K Gold Plated' },
                { icon: '◇', label: 'Hypoallergenic' },
                { icon: '↩', label: '30-Day Returns' },
              ].map(item => (
                <div key={item.label} className="py-3 border border-obsidian-100">
                  <p className="text-gold text-sm mb-1">{item.icon}</p>
                  <p className="font-sans text-[10px] text-obsidian-500 tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-obsidian-100">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-obsidian-100">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian">
                      {acc.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-obsidian-400 transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5 animate-fade-in">
                      <p className="font-sans text-sm text-obsidian-500 leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-cream-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
