import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (!product) navigate('/shop');
    window.scrollTo(0, 0);
  }, [slug, product, navigate]);

  if (!product) return null;

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }) {
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const relatedProducts = products.filter(p => product.related.includes(p.id));

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id, selectedImage]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
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
      content: `${product.materials}\n\nCare: Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Gently polish with a soft cloth to restore shine.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.\n\nReturns accepted within 30 days of delivery. Items must be unworn and in original packaging.',
    },
  ];

  const imageIds = [
    `${product.imgId}-detail-0`,
    `${product.imgId}-detail-1`,
    `${product.imgId}-detail-2`,
    `${product.imgId}-detail-3`,
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fdfaf6] pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-[#a89e95] hover:text-[#c9a96e] transition-colors duration-200">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-[#d4ccc4]">/</span>
          <span className="font-sans text-xs text-[#7a6f66] capitalize">{product.category}</span>
          <span className="text-[#d4ccc4]">/</span>
          <span className="font-sans text-xs text-[#2c2825] tracking-[0.08em] uppercase">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {imageIds.map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i ? 'border-[#c9a96e]' : 'border-transparent hover:border-[#e8e0d6]'
                  }`}
                >
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${product.titleId}] gold jewelry detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover bg-[#f0ebe4]"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square md:aspect-[4/5] overflow-hidden bg-[#f0ebe4] relative">
              <img
                data-strk-img-id={`${product.imgId}-main-selected-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#1a1714] text-[#c9a96e] font-sans text-[10px] tracking-[0.1em] uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Name & Rating */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#a89e95] mb-2 capitalize">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-[#2c2825] font-semibold leading-tight mb-3"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="sr-only">{product.shortDescription}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4ccc4]'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-[#7a6f66]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl text-[#2c2825]">${product.price}</span>
                {product.originalPrice && (
                  <span className="font-sans text-base text-[#a89e95] line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-[#e8e0d6] mb-6" />

            {/* Short description */}
            <p className="font-sans text-sm text-[#7a6f66] leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-[#2c2825] font-semibold mb-3">
                Finish: <span className="text-[#7a6f66] normal-case tracking-normal font-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 font-sans text-xs tracking-[0.1em] uppercase transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'bg-[#1a1714] text-[#c9a96e] border border-[#1a1714]'
                        : 'bg-transparent text-[#7a6f66] border border-[#e8e0d6] hover:border-[#c9a96e] hover:text-[#c9a96e]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-6">
              {/* Quantity */}
              <div className="flex items-center border border-[#e8e0d6]">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-[#7a6f66] hover:text-[#2c2825] hover:bg-[#f0ebe4] transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-[#2c2825]">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-[#7a6f66] hover:text-[#2c2825] hover:bg-[#f0ebe4] transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                  added
                    ? 'bg-[#2c2825] text-[#c9a96e]'
                    : 'bg-[#c9a96e] text-[#1a1714] hover:bg-[#b8935a]'
                }`}              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] text-[#a89e95] flex items-center gap-1">
                  <span className="text-[#c9a96e]">✦</span> {t}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-[#e8e0d6] mb-0" />

            {/* Accordions */}
            <div>
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-[#e8e0d6]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-[0.12em] uppercase text-[#2c2825] font-semibold">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id
                      ? <ChevronUp size={14} strokeWidth={1.5} className="text-[#c9a96e]" />
                      : <ChevronDown size={14} strokeWidth={1.5} className="text-[#7a6f66]" />
                    }
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === acc.id ? 'max-h-60 pb-4' : 'max-h-0'
                  }`}>
                    <p className="font-sans text-sm text-[#7a6f66] leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}

function RelatedProducts({ products: relatedList }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#f0ebe4] border-t border-[#e8e0d6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-[#2c2825]">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto mt-3" />
        </div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {relatedList.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f7f3ee] mb-3 relative">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${product.id}-title`} className="font-sans text-xs tracking-[0.12em] uppercase text-[#2c2825] font-semibold">
                {product.name}
              </p>
              <p id={`related-${product.id}-desc`} className="sr-only">{product.shortDescription}</p>
              <p className="font-serif text-base text-[#2c2825] mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
