import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import StarRating from '../../components/StarRating';
import { useCart } from '../../context/CartContext';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.defaultVariant || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.defaultVariant);
      setSelectedImage(0);
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug, product]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-primary">
            Browse All Jewelry
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.slug, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-2">
          <p><span className="font-medium">Materials:</span> {product.materials}</p>
          <p><span className="font-medium">Care:</span> {product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Standard delivery 5-10 business days. Express delivery available at checkout. 30-day hassle-free returns — contact us to initiate a return.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="section-padding pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2 text-xs text-velmora-gray">
          <Link to="/" className="hover:text-velmora-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-velmora-charcoal capitalize">{product.name}</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-velmora-warm overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-${product.id}-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-velmora-warm overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[product-${product.id}-title]`}
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

          {/* Product info */}
          <div className="md:pt-4">
            <h1
              id={`product-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-widest-xl text-velmora-charcoal mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating
                rating={product.rating}
                size={14}
                showValue
                reviewCount={product.reviewCount}
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-xl md:text-2xl font-medium text-velmora-charcoal">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-base text-velmora-gray line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="font-sans text-sm text-velmora-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="font-sans text-xs font-medium tracking-wider uppercase text-velmora-gray mb-3 block">
                  Tone
                </label>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => v.available && setSelectedVariant(v.id)}
                      disabled={!v.available}
                      className={`px-5 py-2.5 font-sans text-xs font-medium tracking-wider uppercase border transition-all ${
                        selectedVariant === v.id
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : v.available
                          ? 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
                          : 'border-velmora-border text-velmora-gray opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {v.label}
                      {!v.available && ' — Sold Out'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-xs font-medium tracking-wider uppercase text-velmora-gray mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-velmora-warm transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-velmora-warm transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-velmora-gray">
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-velmora-gold" /> Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-velmora-gold" /> 30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={12} className="text-velmora-gold" /> Gift Packaging
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="section-padding pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto border-t border-velmora-border">
          {accordions.map((acc) => (
            <div key={acc.id} className="border-b border-velmora-border">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                }
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-sans text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
                  {acc.title}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-velmora-gray transition-transform duration-300 ${
                    openAccordion === acc.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === acc.id ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <div className="font-sans text-sm text-velmora-gray leading-relaxed">
                  {acc.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="section-padding pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-charcoal text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-velmora-warm overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-${p.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.images[0].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3
                      id={`related-${p.id}-title`}
                      className="product-name mb-1.5 group-hover:text-velmora-gold transition-colors"
                    >
                      {p.name}
                    </h3>
                    <span className="font-sans text-sm font-medium text-velmora-charcoal">
                      ${p.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}