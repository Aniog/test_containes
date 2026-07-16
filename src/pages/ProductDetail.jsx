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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8B7E74] mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.images.primary, product.images.secondary];
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center text-sm tracking-wider mb-8 hover:text-[#C5A46E]">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#FAF8F4] mb-4 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#FAF8F4] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#C5A46E]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.1em] mb-3">{product.name}</p>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#C5A46E] text-[#C5A46E]' : 'text-[#E5E0D8]'}`} />
                ))}
              </div>
              <span className="text-sm text-[#8B7E74]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-[#8B7E74] leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
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
              <p className="text-xs tracking-[0.15em] uppercase mb-3">Quantity</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#FAF8F4]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#FAF8F4]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#8B7E74]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', title: 'Description', content: 'Each piece is hand-finished in our atelier using traditional techniques passed down through generations. Our demi-fine collection offers the beauty of fine jewelry at an accessible price point.' },
                { key: 'materials', title: 'Materials & Care', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Clean gently with a soft cloth. Avoid exposure to harsh chemicals and store in a dry place.' },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day returns accepted. Items must be unworn with original packaging. Please allow 5-10 business days for international delivery.' }
              ].map((section) => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span className="text-sm tracking-[0.1em] uppercase">{section.title}</span>
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#8B7E74] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-2">Complete the Look</p>
          <h3 className="serif text-3xl mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/3] bg-[#FAF8F4] mb-4 overflow-hidden">
                  <img src={item.images.primary} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-wider mb-1">{item.name}</p>
                <p className="text-[#8B7E74] text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;