import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-6">Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest mb-8 hover:text-[var(--color-gold)]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[var(--color-light-gray)] overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, i) => (
                <div key={i} className="aspect-square bg-[var(--color-light-gray)] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="pt-2">
            <p className="product-name text-3xl mb-3">{product.name}</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <span className="text-sm text-[var(--color-taupe)]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[var(--color-taupe)] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.12em] uppercase text-[var(--color-taupe)] mb-3">Finish</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.12em] uppercase text-[var(--color-taupe)] mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[var(--color-border)]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[var(--color-border)]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[var(--color-taupe)] tracking-widest">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[var(--color-border)]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: '18K gold plated brass. To maintain luster, avoid contact with water, perfume, and lotions. Store in a dry place.' },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days. Items must be unworn with original packaging.' },
              ].map(({ key, label, content }) => (
                <div key={key}>
                  <div className="accordion-header" onClick={() => toggleAccordion(key)}>
                    <span className="text-sm tracking-[0.08em]">{label}</span>
                    <span className="text-xl">{openAccordion === key ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-content text-sm text-[var(--color-taupe)] ${openAccordion === key ? 'open' : ''}`}>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t">
          <h3 className="serif text-3xl mb-10 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3] bg-[var(--color-light-gray)] overflow-hidden mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)]">{p.name}</p>
                <p className="text-sm text-[var(--color-taupe)]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;