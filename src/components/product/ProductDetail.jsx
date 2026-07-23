import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { formatPrice } from '@/lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id && (p.category === product?.category || p.material === product?.material)).slice(0, 4);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('gold');
    setQuantity(1);
    setAdded(false);
    setOpenAccordion('description');
  }, [id]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--velmora-bg)' }}>
        <div className="text-center">
          <p className="velmora-heading text-2xl mb-4" style={{ color: 'var(--velmora-text-muted)' }}>
            Piece Not Found
          </p>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: product.materials,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging. Contact us at hello@velmora.com for any questions.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen" style={{ backgroundColor: 'var(--velmora-bg)' }}>
      <div className="velmora-container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--velmora-text-light)' }}>
          <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
          <span>/</span>
          <span style={{ color: 'var(--velmora-text-muted)' }}>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[3/4] mb-4 overflow-hidden" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
              <img
                alt={product.name}
                data-strk-img-id={`product-${product.id}-${selectedImage}`}
                data-strk-img={product.images[selectedImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />

              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" style={{ color: 'var(--velmora-text)' }} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" style={{ color: 'var(--velmora-text)' }} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-20 overflow-hidden transition-all duration-300 ${
                      i === selectedImage ? 'ring-2 ring-[var(--velmora-accent)]' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: 'var(--velmora-bg-alt)' }}
                  >
                    <img
                      alt=""
                      data-strk-img-id={`product-thumb-${product.id}-${i}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="120"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {product.badge && (
              <span
                className="inline-block text-[10px] tracking-[0.15em] uppercase px-3 py-1 mb-4"
                style={{ backgroundColor: 'var(--velmora-accent)', color: '#fff' }}
              >
                {product.badge}
              </span>
            )}

            <h1
              id={`${product.id}-title`}
              className="velmora-product-name text-2xl md:text-3xl mb-3"
              style={{ color: 'var(--velmora-text)' }}
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} reviews={product.reviews} />

            <p className="velmora-heading text-2xl md:text-3xl mt-4 mb-6" style={{ color: 'var(--velmora-text)' }}>
              {formatPrice(product.price)}
            </p>

            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--velmora-text-muted)' }}>
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase font-medium mb-3" style={{ color: 'var(--velmora-text)' }}>
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'ring-2'
                        : 'border hover:border-[var(--velmora-text)]'
                    }`}
                    style={{
                      borderColor: selectedVariant === variant ? 'transparent' : 'var(--velmora-border)',
                      ringColor: 'var(--velmora-accent)',
                      backgroundColor: selectedVariant === variant ? 'var(--velmora-dark)' : 'transparent',
                      color: selectedVariant === variant ? '#fff' : 'var(--velmora-text)',
                    }}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase font-medium mb-3" style={{ color: 'var(--velmora-text)' }}>
                Quantity
              </p>
              <div className="flex items-center border w-32" style={{ borderColor: 'var(--velmora-border)' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:opacity-60 transition-opacity"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:opacity-60 transition-opacity"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`velmora-btn-accent w-full ${added ? 'scale-95' : ''}`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs" style={{ color: 'var(--velmora-text-muted)' }}>
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.key} style={{ borderTop: '1px solid var(--velmora-border)' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-[0.08em] uppercase font-medium" style={{ color: 'var(--velmora-text)' }}>
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openAccordion === acc.key ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--velmora-text-muted)' }}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm leading-relaxed" style={{ color: 'var(--velmora-text-muted)' }}>
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="velmora-heading text-2xl md:text-3xl text-center mb-8" style={{ color: 'var(--velmora-text)' }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                  <div className="relative aspect-[3/4] mb-3 overflow-hidden" style={{ backgroundColor: 'var(--velmora-bg-alt)' }}>
                    <img
                      alt={rp.name}
                      data-strk-img-id={`related-${rp.id}`}
                      data-strk-img={rp.images[0].query}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="velmora-product-name text-xs mb-1" style={{ color: 'var(--velmora-text)' }}>
                    {rp.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--velmora-text)' }}>
                    {formatPrice(rp.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
