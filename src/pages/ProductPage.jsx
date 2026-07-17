import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-parchment min-h-screen pt-16 lg:pt-20">
      <ProductDetail product={product} />
    </div>
  );
}

function ProductDetail({ product }) {
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const related = getRelatedProducts(product, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.slug]);

  const images = [
    { id: product.imgId, id2: `${product.imgId}-main` },
    { id: product.imgId2, id2: `${product.imgId2}-alt` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div>
          <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-4">
            {product.description}
          </p>
          <ul className="flex flex-col gap-2">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gold mt-1.5 flex-shrink-0">·</span>
                <span className="font-manrope text-sm text-ink-muted">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'care',
      label: 'Materials & Care',
      content: (
        <p className="font-manrope text-sm text-ink-muted leading-relaxed">
          {product.care}
        </p>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <p className="font-manrope text-sm text-ink-muted leading-relaxed">
          {product.shipping}
        </p>
      ),
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="font-manrope text-[10px] tracking-[0.15em] uppercase text-ink-muted hover:text-gold transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-sand">/</span>
          <span className="font-manrope text-[10px] tracking-[0.15em] uppercase text-ink-muted capitalize">
            {product.category}
          </span>
          <span className="text-sand">/</span>
          <span className="font-manrope text-[10px] tracking-[0.15em] uppercase text-obsidian">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen">
              <img
                data-strk-img-id={images[activeImage].id}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-sand text-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-ink-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-ink-muted leading-relaxed mb-6 border-t border-sand pt-6"
            >
              {product.shortDescription}. {product.description.split('.')[0]}.
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-[10px] tracking-[0.15em] uppercase text-ink-muted mb-3">
                  Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs tracking-[0.1em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-obsidian bg-obsidian text-cream'
                          : 'border-sand text-ink-muted hover:border-obsidian hover:text-obsidian'
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
              <p className="font-manrope text-[10px] tracking-[0.15em] uppercase text-ink-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-manrope text-xs tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                added
                  ? 'bg-obsidian/80 text-cream'
                  : 'bg-obsidian text-cream hover:bg-charcoal'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-sand">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-[10px] tracking-[0.1em] uppercase text-ink-muted flex items-center gap-1">
                  <span className="text-gold">·</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-sand">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-ink-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-muted" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openAccordion === acc.id ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <RelatedProducts products={related} />
      )}
    </div>
  );
}

function RelatedProducts({ products }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-linen py-16 lg:py-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-obsidian mb-10 text-center">
          You May Also Like
        </h2>
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-parchment mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian group-hover:text-gold transition-colors">
                {product.name}
              </p>
              <p id={product.descId} className="font-manrope text-[11px] text-ink-muted mt-0.5">
                {product.shortDescription}
              </p>
              <p className="font-manrope text-sm font-medium text-obsidian mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
