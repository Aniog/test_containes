import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);
  
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Find product by id
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(0);
      setQuantity(1);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-16 min-h-screen bg-sand-50 flex items-center justify-center">
        <p className="font-serif text-stone-500 text-lg">Product not found.</p>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, activeVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-stone-100 mb-8 hidden md:block">
        <div className="flex items-center text-xs uppercase tracking-widest text-stone-500">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link to="/shop" className="hover:text-stone-900 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-stone-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="w-full aspect-[4/5] bg-stone-100 flex-grow">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 scrollbar-hide">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 md:w-full aspect-[4/5] flex-shrink-0 border-2 transition-colors ${activeImage === idx ? 'border-stone-900' : 'border-transparent hover:border-stone-300'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col pt-4">
            <h1 className="text-3xl lg:text-4xl font-serif text-stone-950 mb-2 tracking-wide uppercase">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-gold-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500">(12 Reviews)</span>
            </div>

            <p className="text-xl text-stone-900 mb-8">${product.price.toFixed(2)}</p>

            <p className="text-stone-600 font-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8 border-t border-b border-stone-100 py-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-widest text-stone-900">Finish</span>
                <span className="text-sm text-stone-500">{activeVariant}</span>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setActiveVariant('Gold')}
                  className={`w-8 h-8 rounded-full border-2 focus:outline-none transition-all ${
                    activeVariant === 'Gold' ? 'border-stone-950 p-[2px]' : 'border-transparent'
                  }`}
                  aria-label="Select Gold finish"
                >
                  <span className="block w-full h-full rounded-full bg-gold-400"></span>
                </button>
                <button
                  onClick={() => setActiveVariant('Silver')}
                  className={`w-8 h-8 rounded-full border-2 focus:outline-none transition-all ${
                    activeVariant === 'Silver' ? 'border-stone-950 p-[2px]' : 'border-transparent'
                  }`}
                  aria-label="Select Silver finish"
                >
                  <span className="block w-full h-full rounded-full bg-stone-300"></span>
                </button>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex space-x-4 mb-12">
              <div className="flex items-center border border-stone-300 px-3 py-1 w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-grow text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-stone-950 text-white uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors py-4 px-8"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-stone-200">
              {/* Description */}
              <div className="border-b border-stone-200">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none text-left"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-stone-900">Description</span>
                  {openAccordion === 'description' ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-stone-200">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none text-left"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-stone-900">Materials & Care</span>
                  {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-stone-600 font-light text-sm leading-relaxed mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p className="text-stone-600 font-light text-sm leading-relaxed"><strong>Care:</strong> To maintain the luster of your Velmora jewelry, remove before swimming, bathing, or exercising. Avoid contact with perfumes, lotions, and hairsprays. Store in the provided pouch when not in use.</p>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-stone-200">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none text-left"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-stone-900">Shipping & Returns</span>
                  {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">Enjoy free worldwide shipping on orders over $100. We gladly accept returns of unworn, unwashed, and undamaged items within 30 days of delivery.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-950">You May Also Like</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="group flex flex-col relative text-center">
              <Link to={`/product/${relatedProduct.id}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 inline-block">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                />
                <img 
                  src={relatedProduct.hoverImage} 
                  alt={`${relatedProduct.name} alternate view`} 
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                />
              </Link>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-950 mb-1 leading-relaxed">
                  <Link to={`/product/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                </h3>
                <p className="text-stone-500 text-sm mt-auto">${relatedProduct.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
