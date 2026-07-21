import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import { ChevronDown, Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-velmora-gold underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content:
        'Crafted from premium brass with a thick layer of 18K gold plating. Hypoallergenic and nickel-free. To maintain shine, avoid contact with perfumes, lotions, and water. Store in the provided pouch when not in use. Clean gently with a soft cloth.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-xs text-velmora-stone">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-velmora-charcoal">{product.displayName}</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Images */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible md:w-20 shrink-0">
              {[0, 1].map((i) => {
                const thumbId = `product-detail-${product.id}-thumb-${i}`;
                const titleId = `pd-title-${product.id}`;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden transition-colors ${
                      selectedImage === i
                        ? 'border-velmora-charcoal'
                        : 'border-transparent hover:border-velmora-border'
                    }`}
                  >
                    <img
                      data-strk-img-id={thumbId}
                      data-strk-img={`[${titleId}] ${product.category} jewelry gold detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.displayName} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] md:aspect-[3/4] bg-velmora-cream-dark overflow-hidden">
              {[0, 1].map((i) => {
                const mainId = `product-detail-${product.id}-main-${i}`;
                const titleId = `pd-title-${product.id}`;
                return (
                  <img
                    key={i}
                    data-strk-img-id={mainId}
                    data-strk-img={`[${titleId}] ${product.category} jewelry gold elegant`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.displayName}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      selectedImage === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="self-start mb-3 px-2.5 py-1 bg-velmora-gold text-velmora-charcoal text-[10px] font-semibold uppercase tracking-widest">
                {product.badge}
              </span>
            )}

            <h1
              id={`pd-title-${product.id}`}
              className="font-sans text-lg md:text-xl font-medium uppercase tracking-[0.15em] text-velmora-charcoal"
            >
              {product.name}
            </h1>

            <div className="mt-2 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 font-sans text-2xl font-light text-velmora-charcoal">
              ${product.price}
            </p>

            <p className="mt-4 text-sm text-velmora-stone leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-velmora-charcoal mb-3">
                  Tone — {selectedVariant}
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                          : 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium text-velmora-charcoal min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full py-4 bg-velmora-gold text-velmora-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${product.price * quantity}
            </button>

            <p className="mt-3 text-center text-xs text-velmora-stone">
              Free shipping on orders over $50
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm font-medium uppercase tracking-widest text-velmora-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-velmora-stone transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-stone leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-velmora-border bg-velmora-cream">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream-dark mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}-${i}`}
                    data-strk-img={`[related-title-${p.id}] ${p.category} jewelry gold elegant`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.displayName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-title-${p.id}`}
                  className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-velmora-charcoal"
                >
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-velmora-charcoal">
                  ${p.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
