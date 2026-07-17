import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base tracking-wide text-brand-charcoal">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm-gray" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-5 text-sm text-brand-warm-gray font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [relatedRef, relatedRevealed] = useScrollReveal();

  useStrkImages(containerRef, [id]);

  useEffect(() => {
    setLoaded(true);
    setSelectedImage(0);
    setQuantity(1);
    setSelectedVariant('Gold');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="text-sm font-sans text-brand-gold hover:text-brand-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
  };

  return (
    <div ref={containerRef} className="bg-brand-cream min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Breadcrumb */}
        <nav className={`mb-8 text-xs font-sans text-brand-muted transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.images[selectedImage].descId}] [${product.images[selectedImage].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === idx ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className={`py-2 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1
              id={product.images[0].titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-brand-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-sans font-medium text-brand-charcoal">
              ${product.price}
            </p>

            {/* Description */}
            <p
              id={product.images[0].descId}
              className="mt-4 text-sm text-brand-warm-gray font-sans leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs font-sans font-medium tracking-extra-wide uppercase border transition-colors duration-200 ${
                      selectedVariant === variant
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold tracking-extra-wide uppercase text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-sans font-medium text-brand-charcoal w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-brand-gold text-white font-sans text-xs font-semibold tracking-super-wide uppercase py-4 hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-b border-brand-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div
          ref={relatedRef}
          className={`mt-20 scroll-reveal animate-reveal-up ${relatedRevealed ? 'revealed' : ''}`}
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
                  <img
                    data-strk-img-id={`related-${rp.images[0].imgId}`}
                    data-strk-img={`[${rp.images[0].descId}] [${rp.images[0].titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-super-wide uppercase text-brand-charcoal">
                  {rp.name}
                </h3>
                <p className="text-sm font-sans text-brand-warm-gray mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
