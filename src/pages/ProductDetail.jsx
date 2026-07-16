import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 pb-32 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B8976E]">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F1EA] mb-3 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.imageSecondary, product.image, product.imageSecondary].map((img, i) => (
                <div key={i} className="aspect-square bg-[#F5F1EA] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.12em] mb-3 pr-8">{product.name}</div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">${product.price}</span>
              <span className="text-[#B8976E]">★ {product.rating}</span>
              <span className="text-sm text-[#6B655E]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B655E] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-[#6B655E] mb-3">FINISH</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
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
              <div className="text-xs tracking-[0.15em] text-[#6B655E] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD4] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-[#F5F1EA]">-</button>
                <span className="px-6 py-2.5 border-x border-[#E5DFD4]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-[#F5F1EA]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B655E]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD4]">
              {[
                { key: 'desc', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier.' },
                { key: 'care', label: 'Materials & Care', content: `Material: ${product.material}. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.` },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping. 30-day returns. All pieces are hypoallergenic and nickel-free.' },
              ].map((acc) => (
                <div key={acc.key}>
                  <div className="accordion-header" onClick={() => toggleAccordion(acc.key)}>
                    <span>{acc.label}</span>
                    <span className="text-xl leading-none">{openAccordion === acc.key ? '−' : '+'}</span>
                  </div>
                  <div className={`accordion-content text-sm text-[#6B655E] ${openAccordion === acc.key ? 'open' : ''}`}>
                    {acc.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="text-xs tracking-[0.15em] text-[#B8976E] mb-6">YOU MAY ALSO LIKE</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
