import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-dark mb-4">Product Not Found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-gold underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen pt-20 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-[10px] tracking-widest uppercase text-velmora-taupe mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-dark">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-gradient-to-br from-velmora-warm to-velmora-sand rounded-sm overflow-hidden mb-4 flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-velmora-gold/25" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map(i => (
                <button
                  key={i}
                  className={`w-20 h-20 bg-velmora-sand rounded-sm overflow-hidden border-2 transition-colors ${
                    i === 1 ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-velmora-warm to-velmora-sand flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-velmora-gold/20" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block self-start bg-velmora-dark text-white text-[9px] tracking-wider uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-dark mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-xl text-velmora-dark mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
                />
              ))}
              <span className="text-xs text-velmora-taupe ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="text-sm text-velmora-taupe leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">
                Finish: <span className="text-velmora-dark">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border text-velmora-dark hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center text-sm font-medium tabular-nums">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase transition-all duration-500 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-dark text-white hover:bg-velmora-gold'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Shipping note */}
            <div className="flex items-center gap-2 mt-4 text-[10px] tracking-wider text-velmora-taupe">
              <Truck className="w-3 h-3" />
              Free shipping on all orders
            </div>

            {/* Divider */}
            <div className="h-px bg-velmora-border my-8" />

            {/* Accordions */}
            <div className="space-y-px">
              {accordionItems.map(item => (
                <div key={item.key} className="border-b border-velmora-border">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
                  >
                    {item.title}
                    {activeAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-taupe leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark">You May Also Like</h2>
            <div className="w-12 h-px bg-velmora-gold/30 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-velmora-gold/25" />
                </div>
                <p className="font-serif text-[11px] md:text-xs tracking-widest uppercase text-velmora-dark group-hover:text-velmora-gold transition-colors">
                  {rp.name}
                </p>
                <p className="font-serif text-sm text-velmora-dark mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
