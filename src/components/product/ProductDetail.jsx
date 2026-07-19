import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductImageGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div ref={containerRef} className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden group">
        <div
          className="w-full h-full transition-opacity duration-300"
          data-strk-bg-id={`product-${product.id}-${activeIndex}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] ${product.name} product image ${activeIndex + 1}`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="800"
        />

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`w-16 h-20 bg-[var(--velmora-bg-alt)] flex-shrink-0 transition-all ${
                activeIndex === index ? 'ring-2 ring-[var(--velmora-accent)]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className="w-full h-full"
                data-strk-bg-id={`product-thumb-${product.id}-${index}`}
                data-strk-bg={`[${product.id}-desc] [${product.id}-title] thumbnail ${index + 1}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="200"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  // Get product from URL param
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="velmora-serif text-2xl text-[var(--velmora-text-muted)]">Product not found</p>
      </div>
    );
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
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
      content: (
        <div className="space-y-3">
          <p><span className="font-medium">Materials:</span> {product.details.materials}</p>
          <p><span className="font-medium">Care:</span> {product.details.care}</p>
          <p><span className="font-medium">Dimensions:</span> {product.details.dimensions}</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
          <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
          <p>Gift sets are eligible for exchange only.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <ProductImageGallery product={product} />

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-[var(--velmora-accent)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="velmora-product-name text-2xl sm:text-3xl text-[var(--velmora-dark)] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]' : 'text-[var(--velmora-border)]'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="velmora-serif text-2xl text-[var(--velmora-dark)] mb-6">
              ${product.price}
            </p>

            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-[var(--velmora-dark)] bg-[var(--velmora-dark)] text-white'
                        : variant.available
                        ? 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-dark)]'
                        : 'border-[var(--velmora-border-light)] text-[var(--velmora-text-light)] cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-4 border border-[var(--velmora-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--velmora-bg-alt)] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="velmora-btn-accent w-full mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-[var(--velmora-text-light)] text-center">
              Free shipping · 30-day returns · Secure checkout
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.key} className="border-t border-[var(--velmora-border)]">
                  <button
                    onClick={() => toggleAccordion(accordion.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium tracking-wide">{accordion.title}</span>
                    <span className={`transform transition-transform ${openAccordion === accordion.key ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {openAccordion === accordion.key && (
                    <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 sm:mt-24 pt-16 border-t border-[var(--velmora-border)]">
          <h2 className="velmora-serif text-2xl sm:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-3 overflow-hidden">
          <div
            className="w-full h-full"
            data-strk-bg-id={`related-${product.id}`}
            data-strk-bg={`[${product.id}-desc] [${product.id}-title] related`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="400"
          />
        </div>
        <h3 className="velmora-product-name text-xs text-[var(--velmora-dark)] mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
      <button
        onClick={() => addItem(product, 'gold')}
        className="mt-2 text-xs tracking-widest uppercase text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
