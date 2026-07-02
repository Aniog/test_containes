import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]?.id || '');
      setQuantity(1);
      setActiveImage(0);
      setAdded(false);
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  useEffect(() => {
    if (containerRef.current && product) {
      const timer = setTimeout(() => {
        if (window.ImageHelper) {
          window.ImageHelper.loadImages(
            { /* config loaded globally */ },
            containerRef.current
          );
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [product, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <p className="text-velmora-stone mb-6">We could not find the piece you are looking for.</p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  const related = getRelatedProducts(slug);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { id: 'desc', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: product.materials + ' ' + product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping + ' ' + product.returns },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-stone hover:text-velmora-dark transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      <div className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {Array.from({ length: product.images }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border transition-colors ${
                    activeImage === i ? 'border-velmora-dark' : 'border-velmora-border'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-title] gold jewelry ${product.category} detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src={product.imageUrl}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`product-main-${product.id}-${activeImage}`}
                data-strk-img={`[product-title] gold jewelry ${product.category}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="md:pt-8">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-velmora-muted line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-velmora-stone leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-stone mb-3">
                Metal Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.inStock && setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-velmora-dark bg-velmora-dark text-white'
                        : variant.inStock
                        ? 'border-velmora-border text-velmora-dark hover:border-velmora-dark'
                        : 'border-velmora-border text-velmora-muted opacity-50 cursor-not-allowed'
                    }`}
                  >
                    {variant.name}
                    {!variant.inStock && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`btn-primary w-full mb-3 transition-all ${
                added ? 'bg-velmora-gold' : ''
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <p className="text-xs text-velmora-muted text-center">
              Free shipping on orders over $50. 30-day returns.
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-velmora-dark">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-velmora-stone transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-40 pb-4' : 'max-h-0'
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
      <div className="bg-velmora-sand section-padding py-16 md:py-20">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {related.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
