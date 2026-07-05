import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedColor('Gold');
    setQuantity(1);
    setActiveImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-cream pt-32 text-center">
        <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'desc', title: 'Description', content: product.description },
    { id: 'details', title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-brand-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="font-sans text-xs text-brand-warm-gray">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-ivory overflow-hidden mb-4">
              <div
                data-strk-img-id={`pdp-${product.id}-${activeImage}`}
                data-strk-img={`[${product.id}-name] [product-type] gold jewelry product photo detailed close-up elegant studio lighting`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full bg-brand-ivory"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-brand-ivory overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-brand-gold' : 'border-transparent hover:border-brand-sand'
                  }`}
                >
                  <div
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[${product.id}-name] gold jewelry thumbnail angle ${idx + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full bg-brand-ivory"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-8">
            <p className="section-subheading mb-2">{product.material}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-brand-charcoal font-light mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-brand-warm-gray mb-4">{product.subtitle}</p>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'} />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-warm-gray mb-3">
                Tone: <span className="text-brand-charcoal font-medium">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2.5 font-sans text-sm border transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-warm-gray mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-brand-charcoal hover:bg-brand-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-brand-charcoal hover:bg-brand-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={() => addItem(product, selectedColor, quantity)}
              className="w-full btn-gold py-4 text-base"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-brand-sand">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(text => (
                <div key={text} className="text-center">
                  <p className="font-sans text-[11px] tracking-wider uppercase text-brand-warm-gray">{text}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-brand-sand">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-sans text-sm tracking-wider uppercase text-brand-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-brand-warm-gray transition-transform duration-200 ${
                        activeAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === acc.id && (
                    <div className="pb-5 animate-fade-in">
                      <p className="font-sans text-sm text-brand-warm-gray leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="section-subheading mb-3">Complete the Look</p>
            <h2 className="section-heading">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
