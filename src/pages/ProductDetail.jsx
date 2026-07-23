import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/common/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

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
      content: '18K gold plated over hypoallergenic stainless steel base. Nickel-free and lead-free. To maintain shine, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs text-warm-gray">
            <li><Link to="/" className="no-underline text-warm-gray hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/collection" className="no-underline text-warm-gray hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                data-strk-img-id={`detail-${product.imgId}`}
                data-strk-img={`[detail-${product.id}-desc] [detail-${product.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`detail-thumb-${product.id}-${i}-n${i}o${i}p${i}`}
                    data-strk-img={`[detail-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={`detail-${product.id}-title`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.1em] text-charcoal font-light"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-gold"
                    fill={i < Math.floor(product.rating) ? '#9E7C4C' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 text-xl font-serif text-charcoal">${product.price}</p>

            <p
              id={`detail-${product.id}-desc`}
              className="mt-6 text-sm text-warm-gray leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.1em] text-charcoal mb-3">Tone</p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs uppercase tracking-[0.1em] font-sans border transition-colors rounded-none ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-cream'
                          : 'border-warm bg-transparent text-charcoal hover:border-gold'
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
              <p className="text-xs uppercase tracking-[0.1em] text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-warm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 bg-transparent border-none text-charcoal hover:text-gold"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 bg-transparent border-none text-charcoal hover:text-gold"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-cream py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium border-none hover:bg-gold-dark transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-warm">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.1em] text-charcoal font-sans font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-warm-gray transition-transform ${openAccordion === acc.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="text-sm text-warm-gray leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-warm pt-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
