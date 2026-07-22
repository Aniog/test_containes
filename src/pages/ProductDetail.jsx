import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A847D]">Product not found</p>
          <Link to="/shop" className="btn mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F0EDE6] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F0EDE6] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
              ))}
              <span className="text-sm text-[#8A847D] ml-1">{product.rating} · {product.reviews} reviews</span>
            </div>

            <h1 className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</h1>
            <p className="text-2xl font-light mb-6">${product.price}</p>

            <p className="text-[#5A5650] leading-relaxed mb-8">{product.description}</p>

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
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F6F3]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F6F3]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#8A847D]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { id: 'desc', title: 'Description', content: product.description + ' Each piece is hand-finished and inspected before shipping.' },
                { id: 'care', title: 'Materials & Care', content: '18K gold plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place.' },
                { id: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map(section => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    {section.title}
                    <span className="text-xl">{openAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#5A5650] text-sm leading-relaxed ${openAccordion === section.id ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-16 border-t">
          <h3 className="serif text-2xl mb-8 tracking-[0.05em]">You May Also Like</h3>
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