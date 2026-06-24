import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-text-primary">Product not found</h1>
          <Link to="/shop" className="text-accent text-sm mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted with 18K gold plating over a hypoallergenic brass base. To maintain its luster, avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing. Gently polish with a soft cloth to restore shine.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. We offer hassle-free returns within 30 days of delivery. Items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-[12px] text-text-muted">
          <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-secondary">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.slug}-a1b2`}
                data-strk-img={`[pdp-name-${product.slug}] [pdp-desc-${product.slug}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                width="800"
                height="1067"
              />
            </div>
            {/* Thumbnail row */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-cream overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.slug}-${i}-c3d4`}
                    data-strk-img={`[pdp-name-${product.slug}] gold jewelry detail ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                    width="300"
                    height="300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-3">
              {product.category}
            </p>
            <h1
              id={`pdp-name-${product.slug}`}
              className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-[12px] text-text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-[22px] text-text-primary mt-4 font-light">${product.price}</p>

            {/* Description */}
            <p
              id={`pdp-desc-${product.slug}`}
              className="text-[14px] text-text-secondary mt-4 leading-relaxed"
            >
              {product.shortDescription}. {product.material}.
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[12px] uppercase tracking-[0.1em] text-text-secondary mb-3">
                Tone: <span className="text-text-primary">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`h-9 px-5 text-[11px] uppercase tracking-[0.1em] border transition-colors duration-200 ${
                      selectedVariant === variant
                        ? 'border-accent text-accent bg-accent/5'
                        : 'border-border text-text-secondary hover:border-text-secondary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[12px] uppercase tracking-[0.1em] text-text-secondary mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-[13px] border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full h-14 mt-8 bg-accent text-white text-[12px] uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-200"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-light">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border-light">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                    aria-expanded={openAccordion === acc.id}
                  >
                    <span className="text-[13px] uppercase tracking-[0.08em] text-text-primary">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="text-[13px] text-text-secondary leading-relaxed">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pt-16 border-t border-border-light">
          <h2 className="font-serif text-[24px] md:text-[28px] tracking-[0.08em] uppercase text-text-primary text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
