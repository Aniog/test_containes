import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none text-charcoal hover:text-gold transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-medium">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} /> : <ChevronDown size={14} strokeWidth={1.5} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold Tone');
      setActiveImage(0);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [
    { imgId: product.imgId, query: `[product-desc-${product.id}] [product-name-${product.id}] gold jewelry` },
    { imgId: product.imgId2, query: `[product-name-${product.id}] gold jewelry worn model` },
    { imgId: `${product.imgId}-alt1`, query: `[product-name-${product.id}] gold jewelry detail close-up` },
    { imgId: `${product.imgId}-alt2`, query: `[product-name-${product.id}] gold jewelry lifestyle` },
  ];

  return (
    <div className="bg-cream min-h-screen pt-20 lg:pt-24" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="aspect-square bg-parchment overflow-hidden">
              <img
                data-strk-img-id={galleryImages[activeImage].imgId}
                data-strk-img={galleryImages[activeImage].query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-parchment overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-gold/40'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="text-[9px] tracking-widest uppercase bg-charcoal text-cream px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="text-[9px] tracking-widest uppercase bg-gold text-white px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`product-name-${product.id}`}
              className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-charcoal font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl text-charcoal font-light mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone/30'}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gold/15 mb-6" />

            {/* Short description */}
            <p
              id={`product-desc-${product.id}`}
              className="text-sm text-stone leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-[10px] tracking-widest uppercase text-stone font-medium mb-3">
                  Finish: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 ${
                        selectedVariant === variant
                          ? 'bg-charcoal text-cream border border-charcoal'
                          : 'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase text-stone font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-charcoal/20 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal bg-transparent border-none transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal bg-transparent border-none transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-gold text-white'
                  : 'bg-charcoal text-cream hover:bg-gold'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gold/15">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(item => (
                <span key={item} className="text-[10px] tracking-widest uppercase text-stone">
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-gold/15">
              <AccordionItem title="Description">
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p className="mb-3"><strong className="text-charcoal font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal font-medium">Care:</strong> {product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-parchment py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal font-light mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
