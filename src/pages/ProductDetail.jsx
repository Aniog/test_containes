import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials} To maintain shine, avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivery within 5-7 business days. 30-day hassle-free returns — simply contact us and we\'ll arrange a prepaid return label.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-stone">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-cream overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-z1a2b3`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry product photo`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-cream overflow-hidden border border-sand hover:border-gold transition-colors cursor-pointer">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-c4d5e6`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry detail close up`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1 id={`pdp-${product.id}-name`} className="font-serif text-2xl md:text-3xl text-charcoal font-light uppercase tracking-[0.1em]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-sand'}`} fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'} />
                ))}
              </div>
              <span className="text-xs font-sans text-stone">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="mt-4 text-sm text-stone font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium text-charcoal uppercase tracking-wide">Tone</span>
              <div className="flex gap-2 mt-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs font-sans font-medium uppercase tracking-wide border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-sand text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium text-charcoal uppercase tracking-wide">Quantity</span>
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-sans text-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full py-4 bg-charcoal text-ivory font-sans text-sm font-medium uppercase tracking-widest hover:bg-charcoal/90 transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-sand">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-200 ${openAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4">
                      <p className="text-sm text-stone font-sans leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 border-t border-sand pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
