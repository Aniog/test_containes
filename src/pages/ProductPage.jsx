import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.id || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0].id);
      setQuantity(1);
      setSelectedImage(0);
      setOpenAccordion(null);
    }
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-24 pb-16 text-center">
        <h1 className="font-serif text-2xl text-stone-950 mb-4">
          Product Not Found
        </h1>
        <Link to="/shop" className="btn-outline">
          Continue Shopping
        </Link>
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const galleries = [
    { id: 'main', imgId: `${product.imgId}-gallery-main`, alt: product.imgAlt },
    { id: 'detail', imgId: `${product.imgId}-gallery-detail`, alt: `${product.name} detail view` },
    { id: 'worn', imgId: `${product.imgId}-gallery-worn`, alt: `${product.name} being worn` },
  ];

  const accordions = [
    { id: 'description', title: 'Description', content: product.longDescription },
    { id: 'materials', title: 'Materials & Care', content: product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="font-sans text-[11px] text-stone-400 flex items-center gap-2">
          <Link to="/" className="hover:text-stone-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-stone-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-700 capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-stone-950">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
              <img
                data-strk-img-id={galleries[selectedImage].imgId}
                data-strk-img={`[${product.id}-name] ${product.description}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={galleries[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {galleries.map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 bg-stone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? 'border-gold-500'
                      : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`${g.imgId}-thumb`}
                    data-strk-img={`${product.name} jewelry ${g.id} view gold accessory`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${g.id}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.id}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-stone-950 mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-xl text-stone-950 mb-3">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-stone-200 text-stone-200'
                    }
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="hairline-divider mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-stone-500 mb-3">
                Tone: <span className="text-stone-950 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.12em] border transition-all duration-200 ${
                      selectedVariant === v.id
                        ? 'border-stone-950 bg-stone-950 text-cream-50'
                        : 'border-stone-300 text-stone-600 hover:border-stone-500'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-stone-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-stone-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="px-5 font-sans text-sm text-stone-950 tabular-nums min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-stone-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-950 text-cream-50 py-4 font-sans text-xs uppercase tracking-[0.18em] font-medium hover:bg-stone-800 transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-[10px] text-stone-400 text-center mt-3">
              Free shipping worldwide · 30-day returns
            </p>

            <div className="hairline-divider my-6" />

            {/* Accordions */}
            <div className="flex flex-col">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-stone-200">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-stone-700">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={14} className="text-stone-400" />
                    ) : (
                      <ChevronDown size={14} className="text-stone-400" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 animate-fade-in">
                      <p className="font-sans text-xs text-stone-500 leading-relaxed">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 bg-cream-200/50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-950 mb-3">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
