import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-accent mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-accent">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-surface overflow-hidden mb-4 rounded-sm">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
              <div key={i} className="aspect-square bg-surface overflow-hidden rounded-sm cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="product-name text-3xl tracking-[0.15em] mb-2">{product.name}</div>
          <div className="text-2xl mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-text-light">({product.reviews} reviews)</span>
          </div>

          <p className="text-text-light leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.15em] uppercase mb-3">Finish</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map(variant => (
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
            <div className="text-xs tracking-[0.15em] uppercase mb-3">Quantity</div>
            <div className="flex items-center border border-border w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
              <span className="px-6 py-2 border-x border-border">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-accent w-full mb-8">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { key: 'desc', label: 'Description', content: product.description },
              { key: 'materials', label: 'Materials & Care', content: product.details },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. All pieces are hypoallergenic and tarnish-resistant.' },
            ].map(section => (
              <div key={section.key} className="border-b border-border">
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(section.key)}
                >
                  <span>{section.label}</span>
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content ${openAccordion === section.key ? 'open' : ''}`}>
                  <p className="text-text-light text-sm leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-16 border-t">
          <div className="mb-10">
            <div className="text-xs tracking-[0.2em] uppercase text-text-light mb-2">Complete the Look</div>
            <h3 className="serif text-3xl">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;