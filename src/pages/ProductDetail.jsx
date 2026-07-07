import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product?.id]);

  useEffect(() => {
    setActiveImage(0);
    setVariant('gold');
    setQuantity(1);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-stone">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.details },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-wider uppercase text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-deep">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 flex-shrink-0 bg-velmora-creme rounded-sm overflow-hidden transition-all duration-300 ${
                    activeImage === i ? 'ring-2 ring-velmora-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] ${img.query}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-velmora-creme rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.images[activeImage]?.id}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}] ${product.images[activeImage]?.query || ''}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 id={`pdp-name-${product.id}`} className="font-serif text-2xl lg:text-3xl tracking-wider uppercase text-velmora-deep leading-snug">
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-velmora-deep mt-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p id={`pdp-desc-${product.id}`} className="text-sm text-velmora-stone leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-velmora-deep mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 text-xs tracking-wider uppercase border rounded-sm transition-all duration-300 ${
                      variant === v
                        ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                        : 'border-velmora-border text-velmora-stone hover:border-velmora-gold'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-velmora-deep mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-deep transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="px-5 text-sm font-medium text-velmora-deep">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-deep transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary mt-8 w-full text-center text-sm flex items-center justify-center gap-2 ${
                added ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border pt-6 space-y-1">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-velmora-deep hover:text-velmora-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-stone leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-wide text-velmora-deep mb-3">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {relatedProducts.map((rp) => (
            <Link key={rp.id} to={`/product/${rp.id}`} className="group">
              <div className="aspect-[3/4] bg-velmora-creme rounded-sm overflow-hidden mb-4">
                <img
                  data-strk-img-id={`related-${rp.id}`}
                  data-strk-img={`[related-name-${rp.id}] gold jewelry editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={rp.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-name-${rp.id}`} className="text-[11px] tracking-wider uppercase font-serif text-velmora-deep">
                {rp.name}
              </p>
              <p className="text-sm font-medium text-velmora-deep mt-1">${rp.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
