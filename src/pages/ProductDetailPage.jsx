import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordions = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' 
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-stone-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
              <img 
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pl-8">
            <h1 className="product-name text-lg text-charcoal">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < product.rating ? '#C9A962' : 'none'}
                    stroke={i < product.rating ? '#C9A962' : '#D6D3D1'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-charcoal mt-4">${product.price}</p>

            {/* Description */}
            <p className="text-stone-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm text-stone-600 mb-3">Finish: <span className="text-charcoal capitalize">{selectedVariant}</span></p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm capitalize transition-colors ${
                      selectedVariant === variant 
                        ? 'border-gold bg-gold text-charcoal' 
                        : 'border-stone-300 text-stone-600 hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm text-stone-600 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-300">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:text-gold transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:text-gold transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-charcoal py-4 font-medium hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-stone-200">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-charcoal">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-stone-600 text-sm leading-relaxed">{accordion.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;