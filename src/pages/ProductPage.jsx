import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-stone">Product not found.</p>
        <Link to="/shop" className="text-warm-500 text-sm mt-4 inline-block">Back to Shop</Link>
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

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.details.materials}\n\n${product.details.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.details.shipping },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="container-page">
        {/* Breadcrumb */}
        <div className="text-[11px] text-stone tracking-wider uppercase mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-warm-100 mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-warm-100 via-warm-50 to-warm-200/40 text-stone/30 text-[10px] uppercase tracking-widest">
                {product.name.slice(0, 4)}
              </div>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={`w-20 h-24 border-2 transition-colors ${
                    i === 0 ? 'border-warm-500' : 'border-transparent hover:border-warm-300'
                  } bg-warm-100`}
                >
                  <div className="w-full h-full bg-warm-200/30" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-charcoal font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-stone text-sm mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-warm-500 text-warm-500' : 'text-warm-200'}`}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-xl font-medium text-charcoal mb-8">{formatPrice(product.price)}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-charcoal font-medium mb-3">
                Finish: <span className="capitalize text-stone">{variant} Tone</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 text-xs tracking-wider uppercase border transition-all ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-warm-200 text-stone hover:border-charcoal/40'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-warm-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mb-3 transition-all duration-300 ${
                added ? 'bg-green-700 hover:bg-green-700' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>
            <p className="text-[11px] text-stone text-center">Free shipping & returns</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-warm-200/60 pt-6 space-y-1">
              {accordionItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-charcoal font-medium"
                  >
                    {item.title}
                    {expandedAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                    )}
                  </button>
                  {expandedAccordion === item.key && (
                    <div className="pb-4 text-sm text-stone leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  )}
                  <div className="hairline" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 pt-16 border-t border-warm-200/60">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
