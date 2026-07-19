import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 bg-transparent border-0 text-left"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-inter text-sm text-warm-gray leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

const RelatedCard = ({ product }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-stone aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p id={`related-${product.titleId}`} className="font-cormorant text-sm font-medium tracking-widest uppercase text-charcoal">
          {product.name}
        </p>
        <p className="font-inter text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </Link>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductById(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold');
      setActiveImg(0);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-warm-gray">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const galleryIds = product.galleryImgIds || [product.imgId];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-inter text-[10px] tracking-widest uppercase text-warm-gray hover:text-gold transition-colors bg-transparent border-0 p-0"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryIds.map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-0 p-0 transition-all duration-200 ${
                    activeImg === i ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover bg-stone"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-stone aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-main-${galleryIds[activeImg]}-${activeImg}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl font-medium tracking-widest uppercase text-charcoal leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    style={{
                      color: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF',
                      fill: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF',
                    }}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-charcoal mb-5">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-warm-gray leading-relaxed mb-6 pb-6 border-b border-divider"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                  Finish: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                        selectedVariant === v
                          ? 'bg-espresso text-cream border border-espresso'
                          : 'bg-transparent text-charcoal border border-divider hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-stone transition-colors bg-transparent border-0"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 text-center font-inter text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-stone transition-colors bg-transparent border-0"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-cream font-inter text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            <button className="w-full bg-transparent text-charcoal font-inter text-xs tracking-widest uppercase py-4 border border-divider hover:border-charcoal transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 pt-6 border-t border-divider grid grid-cols-2 gap-3">
              {[
                { icon: '✦', text: 'Free Worldwide Shipping' },
                { icon: '✦', text: '30-Day Returns' },
                { icon: '✦', text: '18K Gold Plated' },
                { icon: '✦', text: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-gold text-[8px]">{item.icon}</span>
                  <span className="font-inter text-[10px] text-warm-gray">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-divider">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-divider">
            <div className="text-center mb-10">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide">
                Complete Your Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
