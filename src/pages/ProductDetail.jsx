import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-espresso">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-bark leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors">
            {product.name}
          </h4>
        </Link>
        <p id={product.descId} className="font-manrope text-xs text-stone mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-cormorant text-base text-espresso">${product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="font-manrope text-[10px] uppercase tracking-widest text-bark hover:text-gold transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-bark">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-gold mt-4 block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-linen">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-stone hover:text-espresso transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <Link to="/" className="font-manrope text-xs text-stone hover:text-espresso transition-colors">Home</Link>
          <span className="font-manrope text-xs text-linen">/</span>
          <Link to="/shop" className="font-manrope text-xs text-stone hover:text-espresso transition-colors">Shop</Link>
          <span className="font-manrope text-xs text-linen">/</span>
          <span className="font-manrope text-xs text-bark">{product.name}</span>
        </div>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[pdp-${product.slug}-title] [pdp-${product.slug}-desc]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-parchment aspect-[3/4]">
              {product.images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={`main-${img.id}`}
                  data-strk-img={`[pdp-${product.slug}-desc] [pdp-${product.slug}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${selectedImage === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-espresso text-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">Bestseller</span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-gold text-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-${product.slug}-title`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3" style={{ fill: i < Math.floor(product.rating) ? '#b8935a' : 'none', color: i < Math.floor(product.rating) ? '#b8935a' : '#e8e0d4' }} />
                ))}
              </div>
              <span className="font-manrope text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-espresso mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={`pdp-${product.slug}-desc`}
              className="font-manrope text-sm text-bark leading-relaxed mb-8 border-b border-linen pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-espresso mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-cream'
                        : 'border-linen text-bark hover:border-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-widest text-espresso mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-bark hover:text-espresso transition-colors border-r border-linen"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-bark hover:text-espresso transition-colors border-l border-linen"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-cream font-manrope text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-gold-light transition-colors mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-espresso text-espresso font-manrope text-xs uppercase tracking-widest py-4 hover:bg-espresso hover:text-cream transition-colors mb-8">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-linen">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span className="font-manrope text-xs text-stone">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28 border-t border-linen pt-16">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">You May Also Like</h2>
              <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-bark border-b border-bark pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
