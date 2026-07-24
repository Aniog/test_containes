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
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div>Product not found</div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F5F2EB] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F5F2EB] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mb-8">${product.price}</p>

            <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] mb-3">TONE</div>
              <div className="flex gap-3">
                {variants.map((v) => (
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
              <div className="text-xs tracking-[0.1em] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-3 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { title: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime tarnish warranty.' },
                { title: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and nickel-free. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section, idx) => (
                <div key={idx}>
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="accordion-header w-full text-left"
                  >
                    {section.title}
                    <span className="text-xl">{openAccordion === idx ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === idx ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h3 className="serif text-2xl mb-8 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-[#F5F2EB] mb-4 overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm mb-1">{p.name}</p>
                <p className="text-sm text-[#6B665F]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;