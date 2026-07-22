import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products, getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import RelatedProducts from '@/components/product/RelatedProducts';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-t border-velmora-taupe/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-lg tracking-wide">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-velmora-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-velmora-warm-gray mb-8 tracking-wider">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-black">{product.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-velmora-cream-dark">
              <img
                data-strk-img-id={`product-${product.id}-${selectedImage}`}
                data-strk-img={`[${product.id}-title] [${product.id}-desc] [product-gallery]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[${product.id}-title] [product-gallery]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.badge && (
              <span className="inline-block bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-black mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-black mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-velmora-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-velmora-black mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === index
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-taupe/50 text-velmora-warm-gray hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-velmora-black mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-taupe/50 hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="text-lg w-8 text-center font-serif">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-taupe/50 hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="w-full btn-primary py-4 text-base"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs text-velmora-warm-gray">
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h18M12 3v18" /></svg>
                30-Day Returns
              </span>
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Ships in 2-3 days
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
              >
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily and treasured for years.</p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
              >
                <p>18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
                <p className="mt-3">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth.</p>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
              >
                <p>Free worldwide shipping on all orders. Orders ship within 2-3 business days.</p>
                <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </div>
  );
}
