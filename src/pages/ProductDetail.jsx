import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import ProductCard from '../components/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
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
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F0EBE3] mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <p className="product-name text-3xl tracking-[0.12em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#C5A46E] fill-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B6058]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B6058] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] mb-3 text-[#8B7355]">FINISH</p>
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
              <p className="text-xs tracking-[0.15em] mb-3 text-[#8B7355]">QUANTITY</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-[#E5DFD6]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-[#E5DFD6]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#6B6058]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD6]">
              {[
                { key: 'desc', title: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
                { key: 'care', title: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes and lotions. Clean with a soft cloth.` },
                { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns. See our full policy for details.' },
              ].map(item => (
                <div key={item.key}>
                  <button 
                    onClick={() => toggleAccordion(item.key)}
                    className="accordion-header w-full text-left"
                  >
                    {item.title}
                    <ChevronDown size={18} className={openAccordion === item.key ? 'rotate-180' : ''} />
                  </button>
                  <div className={`accordion-content text-[#6B6058] text-sm ${openAccordion === item.key ? 'open' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">YOU MAY ALSO LIKE</p>
          <h3 className="serif text-3xl mb-8">Complete the Look</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

export default ProductDetail;