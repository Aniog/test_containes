import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[0.05em] mb-8 hover:text-[var(--color-gold)]">
          <ChevronLeft size={16} className="mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-[var(--color-border)] rounded-xl overflow-hidden mb-4">
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
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[var(--color-gold)]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[var(--color-gold)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="text-3xl mb-8">${product.price}</div>

            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-text-muted)]">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase mb-3 text-[var(--color-text-muted)]">Quantity</div>
              <div className="flex items-center border border-[var(--color-border)] w-fit rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[var(--color-bg)]">-</button>
                <span className="px-6 py-3 border-x border-[var(--color-border)]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[var(--color-bg)]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-gold w-full mb-4">
              Add to Cart
            </button>
            <p className="text-xs text-center text-[var(--color-text-muted)]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[var(--color-border)]">
              {[
                { key: 'desc', title: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques. Our demi-fine collection features 18K gold plating over a hypoallergenic base, designed for everyday wear.' },
                { key: 'care', title: 'Materials & Care', content: '18K gold plated brass with cubic zirconia accents. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Clean gently with a soft cloth.' },
                { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day returns accepted on unworn items in original packaging. Please allow 5-10 business days for delivery.' },
              ].map((section) => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.title}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[var(--color-text-muted)] ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="serif text-3xl">You May Also Like</h3>
            <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[var(--color-gold)]">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[var(--color-border)] rounded-xl overflow-hidden mb-4">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="product-name text-sm tracking-[0.1em] mb-1">{item.name}</div>
                <div className="text-sm text-[var(--color-text-muted)]">${item.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;