import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const dispatch = useCartDispatch();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
  }, [productId]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline text-xs">
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        variant: product.variants[selectedVariant],
        quantity,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-[11px] tracking-wider uppercase text-[#A8A39C]">
          <Link to="/" className="hover:text-[#252320] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-[#252320] transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#252320]">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 bg-[#F5EDDA] overflow-hidden transition-all duration-300 ${
                    selectedImage === i
                      ? 'ring-1 ring-[#C4952E]'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-thumb-name-${product.id}] gold jewelry detail ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-[#F5EDDA] overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name-${product.id}] gold demi-fine jewelry product`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:sticky md:top-28 self-start">
            {/* Category */}
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4952E] mb-3">
              {product.subcategory}
            </p>

            {/* Name */}
            <h1
              id={`pdp-name-${product.id}`}
              className="product-name text-xl md:text-2xl mb-3"
            >
              {product.name}
            </h1>

            {/* Price + Rating */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium tracking-wide">
                ${product.price}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.round(product.rating) ? '#C4952E' : 'none'}
                      stroke={i < Math.round(product.rating) ? '#C4952E' : '#D4D4D4'}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#78716C]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-relaxed text-[#55514C] mb-8">
              {product.description}
            </p>

            <span id={`pdp-thumb-name-${product.id}`} className="hidden">
              {product.name}
            </span>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] tracking-wider uppercase text-[#78716C] mb-3">
                Finish
              </p>
              <div className="flex gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-[13px] tracking-wider border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-[#252320] bg-[#252320] text-white'
                        : 'border-[#E8E3D9] text-[#55514C] hover:border-[#252320]'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E8E3D9]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-[#78716C] hover:text-[#252320] transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="p-3 text-[#78716C] hover:text-[#252320] transition-colors"
                    aria-label="Increase"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <span className="text-xs text-[#A8A39C]">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="btn-primary w-full text-xs tracking-widest gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                {added ? 'Added!' : 'Add to Cart'} — ${product.price * quantity}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#E8E3D9] pt-6 space-y-0.5">
              {[
                { key: 'description', label: 'Description', content: product.description },
                {
                  key: 'materials',
                  label: 'Materials & Care',
                  content: `${product.materials}. Store in a dry place away from moisture. Gently polish with a soft cloth. Avoid contact with perfumes, lotions, and water.`,
                },
                {
                  key: 'shipping',
                  label: 'Shipping & Returns',
                  content:
                    'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 5–10 business days. Returns accepted within 30 days for a full refund. Items must be unworn with original packaging.',
                },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#E8E3D9]">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === section.key ? '' : section.key
                      )
                    }
                    className="w-full flex items-center justify-between py-4 text-[13px] tracking-wider uppercase font-medium text-[#252320]"
                  >
                    {section.label}
                    {openAccordion === section.key ? (
                      <ChevronUp size={16} strokeWidth={1.5} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.5} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === section.key
                        ? 'max-h-60 pb-4'
                        : 'max-h-0'
                    }`}
                  >
                    <p className="text-[14px] leading-relaxed text-[#55514C]">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-3">Complete the Look</p>
              <h2 className="section-title">You May Also Like</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group card-hover"
                >
                  <div className="aspect-[3/4] bg-[#F5EDDA] overflow-hidden mb-4">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p
                    id={`related-name-${p.id}`}
                    className="product-name text-xs md:text-[13px] mb-1.5"
                  >
                    {p.name}
                  </p>
                  <p className="text-sm font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
