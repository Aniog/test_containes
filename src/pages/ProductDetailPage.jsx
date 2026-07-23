import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setAdded(false);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, selectedImage]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const galleryIds = [
    { imgId: product.imgId, label: 'main' },
    { imgId: product.img2Id, label: 'worn' },
    ...product.galleryImgIds.slice(0, 2).map((id, i) => ({ imgId: id, label: `detail-${i}` })),
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-linen">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={galleryIds[selectedImage]?.imgId || product.imgId}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {galleryIds.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`pdp-thumb-${img.imgId}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry ${img.label}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="font-inter text-[10px] tracking-widest uppercase text-gold mb-3">
                {product.badge}
              </span>
            )}

            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light fill-warm-gray-light'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-cormorant text-3xl text-espresso mb-6">${product.price}</p>

            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-warm-gray leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-warm-gray-light mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs tracking-widest uppercase text-espresso mb-3">
                Finish: <span className="text-warm-gray">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-warm-gray-light text-warm-gray hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs tracking-widest uppercase text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-warm-gray-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-espresso transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs tracking-widest uppercase py-5 transition-colors duration-300 ${
                added
                  ? 'bg-espresso/80 text-ivory cursor-default'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            <p className="font-inter text-xs text-warm-gray text-center mt-4">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 flex flex-col">
              <Accordion title="Description" content={product.description} defaultOpen />
              <Accordion title="Materials & Care" content={product.materials} />
              <Accordion title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-warm-gray-light bg-linen py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-4" />
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

function Accordion({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-warm-gray-light">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-espresso">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-warm-gray transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-warm-gray leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
}
