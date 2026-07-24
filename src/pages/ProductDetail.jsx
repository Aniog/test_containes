import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/product/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-espresso">{title}</span>
        <ChevronDown
          size={18}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="font-sans text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(productId), [productId]);
  const { addItem } = useCart();
  const containerRef = useImageLoader([productId]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const nextImage = () => setSelectedImage((i) => (i + 1) % product.images.length);
  const prevImage = () => setSelectedImage((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-taupe mb-8 font-sans uppercase tracking-widest">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-cream overflow-hidden">
              <img
                data-strk-img-id={`${product.images[selectedImage].imgId}-main`}
                data-strk-img={`[product-title] [product-category] [product-description]`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={product.images[selectedImage].width}
                src={PLACEHOLDER}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center text-espresso transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center text-espresso transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[product-title] [product-category]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <p id="product-category" className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-3">
              {product.category}
            </p>
            <h1 id="product-title" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-espresso mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} showValue reviewCount={product.reviewCount} />
            </div>
            <p className="font-serif text-2xl md:text-3xl text-espresso mb-6">${product.price}</p>
            <p id="product-description" className="font-sans text-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <label className="block font-sans text-xs uppercase tracking-widest text-espresso mb-3">
                  Metal
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-espresso text-cream border-espresso'
                          : 'bg-transparent text-espresso border-line hover:border-espresso'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-sans text-xs uppercase tracking-widest text-espresso mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-line bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">
                  <strong className="text-espresso">Materials:</strong> {product.material}, hypoallergenic
                  brass base, lead- and nickel-free.
                </p>
                <p>
                  Store in a dry place and avoid contact with perfumes, lotions, and household
                  chemicals. Clean gently with a soft cloth to maintain the gold finish.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Standard delivery arrives in 5–10 business
                  days; express options available at checkout. We accept returns within 30 days of
                  delivery for unworn items in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-cream border-t border-line py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="section-related" className="section-title text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} sectionId="section-related" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
