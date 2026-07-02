import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-[13px] uppercase tracking-[0.12em] text-charcoal font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-gray" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-luxury ${
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="font-sans text-body text-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    setSelectedVariant(0);
    setQuantity(1);
    setActiveImage(0);
  }, [product?.id]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeImage, product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-display-sm text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Browse All Jewelry</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  // Generate gallery images (main + alts)
  const galleryImages = Array.from({ length: (product.altImages || 0) + 1 }, (_, i) => ({
    id: `${product.id}-gallery-${i}`,
    label: i === 0 ? 'Front' : `Detail ${i}`,
  }));

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto container-px section-padding">
        {/* Breadcrumb */}
        <nav className="mb-8 md:mb-12">
          <ol className="flex items-center gap-2 font-sans text-caption text-warm-gray">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-md overflow-hidden border-2 transition-colors duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-light-gray'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[${product.id}-name] gold jewelry ${img.label.toLowerCase()}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} - ${img.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] rounded-lg overflow-hidden bg-light-gray/20">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[${product.id}-name] elegant gold jewelry product photo editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.15em] text-gold bg-gold/10 py-1.5 px-3 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-display-sm md:text-[3rem] text-charcoal uppercase tracking-[0.08em] leading-tight">
              {product.name}
            </h1>

            <p className="font-sans text-heading-lg text-charcoal mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-light-gray'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-caption text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-body text-warm-gray leading-relaxed mt-5 max-w-md">
              {product.description}
            </p>

            <div className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-warm-gray mb-3">
                Tone: <span className="text-charcoal font-medium">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`py-2.5 px-6 font-sans text-[12px] uppercase tracking-[0.1em] border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-border text-warm-gray hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-warm-gray mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-body w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="btn-primary w-full mt-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Mini trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-warm-gray">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-charcoal text-[13px] mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-[13px] mb-1">Care Instructions</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p><strong className="text-charcoal text-[13px]">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-8 business days. Express available at checkout.</p>
                  <p><strong className="text-charcoal text-[13px]">Returns:</strong> 30-day hassle-free returns. Items must be in original condition with tags attached.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <p className="text-overline mb-3">You May Also Like</p>
              <h2 className="font-serif text-display-sm text-charcoal">Complete the Look</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i + 10} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
