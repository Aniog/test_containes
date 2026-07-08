import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ products, addToCart, selectedVariant, setSelectedVariant }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div className="pt-20 p-8 text-center">Product not found</div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const images = [product.image, product.imageSecondary];

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm tracking-[0.05em] text-[#6B665F] hover:text-[#2C2825] mb-8">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F2EB] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 border-2 overflow-hidden ${selectedImage === idx ? 'border-[#B89778]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.1em] mb-3 pr-8">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#B89778" color="#B89778" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="text-2xl mb-8">${product.price}</div>

            <p className="text-[#6B665F] leading-relaxed mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">TONE</div>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill capitalize ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD3] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD3]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <div className="text-center text-xs tracking-[0.1em] text-[#6B665F]">FREE SHIPPING ON ALL ORDERS</div>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5DFD3]">
              {[
                { key: 'desc', title: 'DESCRIPTION', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime warranty against manufacturing defects.' },
                { key: 'care', title: 'MATERIALS & CARE', content: `Material: ${product.material}. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with a soft cloth. Store in the provided pouch when not in use.` },
                { key: 'ship', title: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Please contact us for return authorization.' },
              ].map(section => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span className="text-sm tracking-[0.1em]">{section.title}</span>
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B665F] leading-relaxed pr-8 ${openAccordion === section.key ? 'open' : ''}`}>
                    <div className="py-4">{section.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-16 border-t border-[#E5DFD3]">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">DISCOVER MORE</div>
            <h3 className="font-serif text-3xl tracking-[0.05em]">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;