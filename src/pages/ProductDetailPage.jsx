import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = ({ products, addToCart, selectedVariant, setSelectedVariant }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B665F] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
    const others = products.filter(p => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...others);
  }

  const images = [product.image, product.imageSecondary];

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6B665F] hover:text-[#2C2825] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F5F1EA] overflow-hidden mb-4">
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
                  className={`w-20 h-20 bg-[#F5F1EA] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#B8976E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-[#B8976E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm text-[#6B665F]">({product.reviews} reviews)</span>
            </div>

            <h1 className="product-name text-3xl tracking-[0.15em] mb-2 pr-4">{product.name}</h1>
            <p className="text-2xl mb-8">${product.price}</p>

            <p className="body-text text-[#6B665F] mb-8 max-w-md">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">FINISH</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
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
              <p className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5DFD4] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F5F1EA]">-</button>
                <span className="px-6 py-2 border-x border-[#E5DFD4]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F5F1EA]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-gold w-full mb-4 text-base py-4"
            >
              Add to Cart — ${product.price * quantity}
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 border-t border-[#E5DFD4]">
              {[
                { id: 'description', label: 'Description', content: product.description + ' Each piece is hand-finished in our atelier and comes with a lifetime guarantee against manufacturing defects.' },
                { id: 'materials', label: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Clean gently with a soft cloth. Avoid contact with perfumes and lotions.' },
                { id: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map(section => (
                <div key={section.id} className="border-b border-[#E5DFD4]">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{activeAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${activeAccordion === section.id ? 'open' : ''}`}>
                    <p className="body-text text-[#6B665F] text-sm pr-8">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5DFD4]">
            <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-8">YOU MAY ALSO LIKE</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
