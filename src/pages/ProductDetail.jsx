import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-obsidian">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone" /> : <ChevronDown className="w-4 h-4 text-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
      </div>
      <div className="pt-3">
        <p className="font-cormorant text-sm uppercase tracking-widest text-obsidian">{product.name}</p>
        <p className="font-inter text-sm font-medium text-obsidian mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-4">
        <p className="font-cormorant text-2xl text-obsidian">Product not found</p>
        <button onClick={() => navigate('/shop')} className="font-inter text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, queryId: `pdp-img-0-${product.id}`, titleId: `pdp-title-0-${product.id}`, descId: `pdp-desc-0-${product.id}` },
    { id: product.imgId2, queryId: `pdp-img-1-${product.id}`, titleId: `pdp-title-1-${product.id}`, descId: `pdp-desc-1-${product.id}` },
    { id: `pdp-img-2-${product.id}-extra`, queryId: `pdp-img-2-${product.id}`, titleId: `pdp-title-2-${product.id}`, descId: `pdp-desc-2-${product.id}` },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <CartDrawer />

      <div ref={containerRef} className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="text-stone hover:text-obsidian transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-inter text-xs text-stone">/</span>
            <Link to="/shop" className="font-inter text-xs text-stone hover:text-obsidian transition-colors uppercase tracking-widest">
              Shop
            </Link>
            <span className="font-inter text-xs text-stone">/</span>
            <span className="font-inter text-xs text-obsidian uppercase tracking-widest">{product.name}</span>
          </div>
        </div>

        {/* Main product section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Image gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {images.map((img, i) => (
                  <button
                    key={img.queryId}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                      activeImg === i ? 'border-obsidian' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={img.queryId}
                      data-strk-img={`[${img.descId}] [${img.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <span id={img.titleId} className="sr-only">{product.name}</span>
                    <span id={img.descId} className="sr-only">{product.shortDescription} {i === 1 ? 'worn on model' : i === 2 ? 'detail close up' : ''}</span>
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative overflow-hidden bg-ivory aspect-[3/4]">
                {images.map((img, i) => (
                  <img
                    key={img.id}
                    data-strk-img-id={img.id}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeImg === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-obsidian font-inter text-[9px] uppercase tracking-widest px-2 py-0.5">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="bg-obsidian text-cream font-inter text-[9px] uppercase tracking-widest px-2 py-0.5">
                    New
                  </span>
                )}
              </div>

              {/* Name */}
              <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-obsidian leading-tight">
                {product.name}
              </h1>

              {/* Price + rating */}
              <div className="flex items-center gap-4 mt-4">
                <span className="font-inter text-2xl font-medium text-obsidian">${product.price}</span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3"
                      style={{ color: i < Math.floor(product.rating) ? '#C9A96E' : '#E8E0D5' }}
                      fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    />
                  ))}
                  <span className="font-inter text-xs text-stone ml-1">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* Short description */}
              <p className="font-inter text-sm text-taupe leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variant selector */}
              <div className="mt-6">
                <p className="font-inter text-xs uppercase tracking-widest text-obsidian mb-3">
                  Finish: <span className="text-taupe normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-inter text-xs uppercase tracking-widest border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'bg-obsidian text-cream border-obsidian'
                          : 'bg-transparent text-taupe border-border hover:border-obsidian hover:text-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="font-inter text-xs uppercase tracking-widest text-obsidian mb-3">Quantity</p>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3 text-taupe hover:text-obsidian transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-5 font-inter text-sm text-obsidian min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3 text-taupe hover:text-obsidian transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`mt-6 w-full py-4 font-inter text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-colors duration-300 ${
                  added
                    ? 'bg-gold text-obsidian'
                    : 'bg-obsidian text-cream hover:bg-gold hover:text-obsidian'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-6 mt-5 py-4 border-t border-b border-border">
                {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                  <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-stone">
                    {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-4">
                <Accordion title="Description">{product.description}</Accordion>
                <Accordion title="Materials & Care">
                  {product.materials} {product.care}
                </Accordion>
                <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="border-t border-border py-16 md:py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
