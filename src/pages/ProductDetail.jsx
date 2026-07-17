import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import useCartStore from '@/store/cartStore';
import ProductCard from '@/components/product/ProductCard';

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const addItem = useCartStore((s) => s.addItem);

  const containerRef = useRef(null);

  useEffect(() => {
    setActiveImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setOpenAccordion('description');
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [slug, activeImage]);

  if (!product) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-heading text-3xl text-velvet-950 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary text-xs">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description': return product.description || product.details;
      case 'materials': return product.materials || product.care || product.details;
      case 'shipping': return product.shipping;
      default: return '';
    }
  };

  return (
    <main className="min-h-screen pt-20" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto section-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-obsidian-muted mb-8">
          <Link to="/" className="hover:text-velvet-950 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet-950 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-950">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`${product.id}-detail-${activeImage}`}
                data-strk-img={`[${product.titleId}] ${activeImage === 0 ? 'product jewelry warm lighting elegant' : 'detail close up product jewelry'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 bg-velvet-100 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold-500' : 'border-transparent hover:border-velvet-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] product jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 id={product.titleId} className="text-product-name text-xl sm:text-2xl md:text-3xl text-velvet-950 mb-3">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl font-medium text-velvet-950 mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-velvet-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-obsidian-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p id={product.descId} className="text-sm text-obsidian-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-velvet-950 mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === v.name
                        ? 'border-velvet-950 bg-velvet-950 text-ivory-50'
                        : 'border-velvet-200 text-velvet-950 hover:border-velvet-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-velvet-200"
                        style={{ backgroundColor: v.color }}
                      />
                      {v.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-velvet-950 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velvet-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velvet-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-velvet-950" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velvet-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velvet-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-velvet-950" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-gold w-full text-xs mb-6">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 text-[11px] text-obsidian-muted mb-8">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="border-t border-velvet-200">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velvet-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-velvet-950">
                      {item.label}
                    </span>
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-4 h-4 text-velvet-950" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velvet-950" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-obsidian-muted leading-relaxed animate-fade-in">
                      {getAccordionContent(item.key)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-heading text-2xl sm:text-3xl text-velvet-950 mb-3">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold-400 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
