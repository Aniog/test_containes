import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts, products } from '../data/products';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];
  const variants = ['Gold', 'Silver'];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center text-sm text-[#6b635c] hover:text-[#2c2825] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#f5f2ed] mb-4 overflow-hidden relative">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 bg-[#f5f2ed] overflow-hidden border-2 ${currentImageIndex === idx ? 'border-[#c5a26f]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.15em] mb-3">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c5a26f" color="#c5a26f" />
                ))}
              </div>
              <span className="text-sm text-[#6b635c]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-[#6b635c] mb-8 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-[#6b635c] mb-3">FINISH</p>
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
              <p className="text-xs tracking-[0.1em] text-[#6b635c] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#e5e0d8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#f5f2ed]">-</button>
                <span className="px-6 py-2 border-x border-[#e5e0d8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#f5f2ed]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6b635c]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#e5e0d8]">
              {[
                { key: 'desc', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: product.details },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6b635c] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#e5e0d8]">
          <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-8">YOU MAY ALSO LIKE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-square bg-[#f5f2ed] mb-4 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-wider mb-1">{item.name}</p>
                <p className="text-sm text-[#6b635c]">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;