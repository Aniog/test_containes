import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [product.image, product.imageSecondary];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }, selectedVariant);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] overflow-hidden bg-[#F8F5F1] mb-4">
            <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 overflow-hidden border-2 ${selectedImage === i ? 'border-[#8B7355]' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</div>
          <div className="text-2xl mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#C5A46E]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-[#8A8178]">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-[#4A4640] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#8A8178]">Tone</div>
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
            <div className="text-xs tracking-[0.15em] uppercase mb-3 text-[#8A8178]">Quantity</div>
            <div className="flex items-center border border-[#E5DFD3] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-10">Add to Cart</button>

          {/* Accordions */}
          <div className="border-t border-[#E5DFD3]">
            {[
              { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime guarantee.' },
              { key: 'care', label: 'Materials & Care', content: '18K gold plated over hypoallergenic brass. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
              { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns. All items are final sale after 30 days.' },
            ].map(acc => (
              <div key={acc.key} className="border-b border-[#E5DFD3]">
                <button onClick={() => toggleAccordion(acc.key)} className="accordion-trigger">
                  {acc.label}
                  <span className="text-xl">{openAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === acc.key ? 'open' : ''}`}>
                  <p className="py-4 text-[#4A4640] text-sm leading-relaxed">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
        <div className="mb-8">
          <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-2">YOU MAY ALSO LIKE</div>
          <h3 className="serif text-3xl tracking-[0.05em]">Related Pieces</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-[#F8F5F1] mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="product-name text-sm tracking-wider">{p.name}</div>
              <div className="text-sm text-[#8A8178]">${p.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;