import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso-700 mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      key: 'description',
      label: 'Description',
      content: (
        <p className="text-sm text-espresso-500 leading-relaxed font-sans">
          {product.description}
        </p>
      ),
    },
    {
      key: 'details',
      label: 'Details',
      content: (
        <ul className="space-y-2">
          {product.details.map((d, i) => (
            <li key={i} className="text-sm text-espresso-500 font-sans flex items-start gap-2">
              <span className="text-gold-400 mt-0.5">•</span>
              {d}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: 'materials',
      label: 'Materials & Care',
      content: (
        <ul className="space-y-2">
          {product.materialsCare.map((m, i) => (
            <li key={i} className="text-sm text-espresso-500 font-sans flex items-start gap-2">
              <span className="text-gold-400 mt-0.5">•</span>
              {m}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="text-sm text-espresso-500 leading-relaxed font-sans space-y-3">
          <p>Free worldwide shipping on all orders over $75. Orders are processed within 1-2 business days and delivered within 5-10 business days depending on your location.</p>
          <p>If you're not completely satisfied, we offer a 30-day return policy for all unworn items in their original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-warm-100 mb-4">
              <div
                className="w-full h-full"
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title-${product.id}] ${product.imageQuery}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-sm overflow-hidden bg-warm-100 transition-all duration-300 ${
                    activeImage === i ? 'ring-2 ring-gold-400 ring-offset-1' : 'hover:opacity-80'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-thumb-title-${i}-${product.id}] ${product.imageQuery}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                  <span id={`pdp-thumb-title-${i}-${product.id}`} className="hidden">{img.alt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-widest uppercase text-espresso-400 mb-2 font-sans">
              {product.category}
            </p>
            <h1 id={`pdp-title-${product.id}`} className="product-name text-2xl md:text-3xl font-medium text-espresso-800 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-espresso-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-espresso-400 font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-espresso-800 mb-6">${product.price}</p>

            <p className="text-espresso-500 leading-relaxed mb-8 font-sans text-sm">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-espresso-500 mb-3 font-sans font-medium">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-sans font-medium rounded-sm transition-all duration-300 ${
                      selectedVariant === i
                        ? 'bg-espresso-800 text-cream'
                        : 'border border-espresso-200 text-espresso-600 hover:border-espresso-400'
                    }`}
                  >
                    {v === 'Gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-espresso-500 mb-3 font-sans font-medium">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-espresso-200 text-espresso-500 hover:border-espresso-400 transition-colors rounded-sm"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-espresso-700 font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-espresso-200 text-espresso-500 hover:border-espresso-400 transition-colors rounded-sm"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
                added
                  ? 'bg-gold-400 text-espresso-900'
                  : 'btn-primary'
              }`}
            >
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-espresso-200/40">
              {accordions.map((acc) => (
                <div key={acc.key} className="py-4">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-xs tracking-widest uppercase text-espresso-600 font-sans font-medium">
                      {acc.label}
                    </span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-espresso-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-espresso-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 hairline pt-16">
          <div className="text-center mb-10">
            <p className="section-subheading mb-3">Complete the Look</p>
            <h2 className="section-heading">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
