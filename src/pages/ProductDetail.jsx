import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.details.description,
    },
    {
      id: 'care',
      title: 'Materials & Care',
      content: product.details.care,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.details.shipping,
    },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24 bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center gap-2 text-xs text-charcoal-400 uppercase tracking-wider font-sans">
          <Link to="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 tracking-wider uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl font-semibold text-charcoal-900 mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-charcoal-600 font-sans text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider font-sans font-semibold text-charcoal-700 mb-3">
                Material: <span className="text-gold">{variant === 'gold' ? '18K Gold Plated' : 'Sterling Silver'}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-3 text-sm font-sans uppercase tracking-wider border transition-all duration-200 ${
                    variant === 'gold'
                      ? 'bg-gold text-charcoal-900 border-gold'
                      : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-3 text-sm font-sans uppercase tracking-wider border transition-all duration-200 ${
                    variant === 'silver'
                      ? 'bg-charcoal-300 text-charcoal-900 border-charcoal-300'
                      : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-charcoal-200">
                <button
                  className="px-4 py-3.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-3.5 text-sm font-medium text-charcoal-800 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-4 py-3.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary text-center"
              >
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordion */}
            <div className="border-t border-charcoal-100">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-charcoal-100">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-wider font-sans font-medium text-charcoal-800">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentId={product.id} />
    </main>
  );
}