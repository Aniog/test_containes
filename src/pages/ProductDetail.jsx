import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus } from 'lucide-react';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem } = useCart();

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImage(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-2xl uppercase tracking-widest">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent text-sm uppercase tracking-widest">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'desc', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. Delivery within 5–10 business days. 30-day hassle-free returns — contact us for a prepaid label.' },
  ];

  return (
    <div className="pt-20 lg:pt-24 bg-background" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4">
        <div className="text-xs text-muted uppercase tracking-widest">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-base">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-subtle overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-subtle overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-6">
            <h1 className="font-serif text-2xl lg:text-3xl uppercase tracking-widest">{product.name}</h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-serif text-xl">${product.price}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" strokeWidth={0} />
                <span className="text-sm text-muted">{product.rating}</span>
                <span className="text-sm text-muted">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted leading-relaxed">{product.description}</p>

            {/* Variant */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-widest text-muted font-medium">Tone</span>
              <div className="flex gap-3 mt-2">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border transition-colors ${variant === v ? 'border-accent bg-accent text-white' : 'border-hairline text-base hover:border-accent'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-hairline bg-surface">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 hover:bg-subtle transition-colors">
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 hover:bg-subtle transition-colors">
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, variant, quantity)}
                className="flex-1 bg-accent text-white uppercase text-xs tracking-widest font-medium py-3.5 hover:bg-accent-hover transition-colors"
              >
                Add to Cart — ${product.price * quantity}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              {accordions.map((a) => (
                <div key={a.key} className="border-b border-hairline">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === a.key ? null : a.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-widest font-medium">{a.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === a.key ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openAccordion === a.key ? 'max-h-96 pb-4' : 'max-h-0'}`}
                  >
                    <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{a.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-surface border-t border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h2 className="font-serif text-2xl lg:text-3xl uppercase tracking-widest text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}