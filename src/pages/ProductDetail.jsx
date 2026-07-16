import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) return <div className="pt-20 p-6">Product not found</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="pt-4">
          <p className="product-name text-3xl tracking-wider mb-2">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-gold">{'★'.repeat(Math.floor(product.rating))}</div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.15em] text-muted-foreground mb-3">TONE</p>
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
            <p className="text-xs tracking-[0.15em] text-muted-foreground mb-3">QUANTITY</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-border hover:bg-gray-50">-</button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-border hover:bg-gray-50">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-8">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { key: 'desc', label: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine jewelry is designed to be treasured and worn daily.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with water, perfume, and lotions. Store in the provided pouch when not in use.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days. Items must be unworn with original packaging.' },
            ].map(item => (
              <div key={item.key} className="border-b border-border">
                <div className="accordion-header" onClick={() => toggleAccordion(item.key)}>
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xl">{openAccordion === item.key ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content ${openAccordion === item.key ? 'open' : ''}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h3 className="font-serif text-2xl mb-8 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
