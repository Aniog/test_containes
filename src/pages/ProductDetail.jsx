import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

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

  const variants = ['Gold', 'Silver'];
  const images = product.images;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center text-sm tracking-wider mb-8 hover:text-[#8B7355]">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-[#F8F5F1] mb-4 overflow-hidden relative">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button 
                    onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-[#F8F5F1] overflow-hidden border-2 ${selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.15em] mb-3 pr-4">{product.name}</p>
            <p className="text-2xl text-[#8B7355] mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="stars flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#6B665F]">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B665F] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Tone</p>
              <div className="flex gap-3">
                {variants.map((variant) => (
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
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Quantity</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B665F]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E5E0D8]">
              {[
                { key: 'desc', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'ship', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. Returns accepted within 30 days of purchase. Items must be unworn with original packaging.' }
              ].map((section) => (
                <div key={section.key}>
                  <button 
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-[#6B665F] text-sm leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
          <h3 className="font-serif text-2xl mb-8 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-[#F8F5F1] mb-4 overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-wider mb-1">{p.name}</p>
                <p className="text-[#8B7355]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;