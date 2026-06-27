import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return <div className="pt-20 p-6 text-center">Product not found</div>;
  }

  const images = [product.image, product.image2];
  const variants = ['Gold', 'Silver'];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6B665F] hover:text-[#2C2825] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2ED] mb-4 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#F5F2ED] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#B8976F]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.1em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="price text-2xl">${product.price}</div>
              <div className="flex items-center gap-1 text-sm">
                <div className="stars flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[#6B665F] ml-1">({product.reviews})</span>
              </div>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="uppercase text-xs tracking-[0.15em] mb-3 text-[#B8976F]">Tone</div>
              <div className="flex gap-3">
                {variants.map(v => (
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
              <div className="uppercase text-xs tracking-[0.15em] mb-3 text-[#B8976F]">Quantity</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F2ED]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F2ED]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full py-4 text-base mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { id: 'desc', title: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime guarantee.' },
                { id: 'care', title: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
                { id: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' }
              ].map(section => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    {section.title}
                    <span className="text-xl">{openAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B665F] ${openAccordion === section.id ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-8">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="product-card group block">
                <div className="relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="product-name text-sm tracking-[0.1em] mb-1">{p.name}</div>
                  <div className="price">${p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
