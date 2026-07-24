import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);
  
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
    setQuantity(1);
    setActiveAccordion('description');
    window.scrollTo(0, 0);
  }, [product]);
  
  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-heading text-espresso-900 mb-4">Product Not Found</h1>
          <p className="text-body text-espresso-500 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/collections" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant);
      openCart();
    }
  };
  
  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };
  
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };
  
  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'details',
      title: 'Materials & Care',
      content: product.details
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Items ship within 1-2 business days. 30-day return policy for unworn items in original packaging.'
    }
  ];
  
  return (
    <div className="pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 font-sans text-sm text-espresso-500">
          <Link to="/" className="hover:text-espresso-700 transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-espresso-700 transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-espresso-900">{product.name}</span>
        </nav>
      </div>
      
      {/* Product section */}
      <section className="container-wide px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-cream-200">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[${product.id}-detail-name] [${product.id}-detail-desc] ${product.category} gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
              />
            </div>
            
            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-square overflow-hidden rounded-md bg-cream-200 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                >
                  <div className="w-full h-full bg-gradient-to-br from-cream-300 to-cream-400" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-6">
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-2 block">
                {product.category}
              </span>
              <h1 
                id={`${product.id}-detail-name`}
                className="text-heading text-espresso-900 mb-2"
              >
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-cream-300'}`}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-espresso-500">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              
              <p className="font-sans text-2xl font-medium text-espresso-900 mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              <p 
                id={`${product.id}-detail-desc`}
                className="font-sans text-body text-espresso-600 leading-relaxed mb-8"
              >
                {product.shortDescription}
              </p>
            </div>
            
            {/* Variant selector */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium text-espresso-700 mb-3 block">
                Color: {selectedVariant?.name}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                      selectedVariant?.id === variant.id
                        ? 'border-gold-500 scale-110'
                        : 'border-cream-300 hover:border-cream-400'
                    }`}
                    style={{ backgroundColor: variant.color }}
                    aria-label={variant.name}
                  />
                ))}
              </div>
            </div>
            
            {/* Quantity selector */}
            <div className="mb-8">
              <label className="font-sans text-sm font-medium text-espresso-700 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-cream-300 rounded-md w-fit">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 text-espresso-500 hover:text-espresso-700 transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-sans text-sm font-medium text-espresso-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-espresso-500 hover:text-espresso-700 transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Add to cart button */}
            <button 
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-base"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
            
            {/* Wishlist and share */}
            <div className="flex items-center gap-6 mt-6">
              <button className="flex items-center gap-2 font-sans text-sm text-espresso-500 hover:text-espresso-700 transition-colors duration-200">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 font-sans text-sm text-espresso-500 hover:text-espresso-700 transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
            
            {/* Accordions */}
            <div className="mt-12 border-t border-cream-200 pt-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-cream-200">
                  <button 
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-espresso-700 hover:text-espresso-900 transition-colors duration-200"
                  >
                    {item.title}
                    {activeAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {activeAccordion === item.id && (
                    <div className="pb-4 font-sans text-sm text-espresso-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-cream-100">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-heading text-espresso-900">
                You May Also Like
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-cream-200 mb-4">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={`related-${relatedProduct.id}`}
                      data-strk-img={`[${relatedProduct.id}-related-name] ${relatedProduct.category} gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 
                      id={`${relatedProduct.id}-related-name`}
                      className="font-serif text-sm tracking-wider text-espresso-900 uppercase mb-1"
                    >
                      {relatedProduct.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-espresso-900">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
