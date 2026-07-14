import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days available at checkout.\n\n30-day returns on unworn items in original packaging. Contact us for a prepaid return label.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone font-light">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-stone">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-stone">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-sm bg-taupe/20">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.id}-x1y2z3`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square overflow-hidden rounded-sm bg-taupe/20">
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-a${i}b${i}c${i}`}
                    data-strk-img={`[pdp-${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest font-light text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviews} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 text-base text-stone font-light leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-stone mb-3 font-sans">Tone</p>
                <div className="flex gap-3">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs uppercase tracking-widest font-sans rounded-sm border transition-colors ${
                        selectedVariant === v
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'bg-transparent text-charcoal border-taupe hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-stone mb-3 font-sans">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-taupe bg-transparent rounded-sm hover:border-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-sans w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-taupe bg-transparent rounded-sm hover:border-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-cream py-4 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors border-none rounded-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-taupe">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-taupe">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone transition-transform ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-stone font-light leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 id="related-products-title" className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} sectionTitleId="related-products-title" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
