import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById, getFeaturedProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(id);
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== parseInt(id)).slice(0, 4);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/shop')}
          className="font-sans text-sm tracking-wider uppercase border-b-2 border-charcoal pb-1 hover:border-gold"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain your jewelry\'s beauty, avoid contact with water, perfume, and lotions. Store in a cool, dry place.' },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Your order will be gift-wrapped in our signature velvet box.' }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-sans text-sm text-warmgray hover:text-charcoal mb-8"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-cream rounded-lg mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-warmgray">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-charcoal leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="font-sans text-sm tracking-wider uppercase mb-3 block">
                Tone
              </label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border rounded-sm font-sans text-sm tracking-wider ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-white text-charcoal border-gray-300 hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-sans text-sm tracking-wider uppercase mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-sm w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-cream"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-cream"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-sm tracking-wider uppercase transition-colors mb-4 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-charcoal text-white hover:bg-gold'
              }`}
            >
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Wishlist */}
            <button className="flex items-center gap-2 font-sans text-sm text-warmgray hover:text-charcoal">
              <Heart size={16} />
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-8 space-y-4">
              {accordions.map((acc, index) => (
                <div key={acc.title} className="border-t border-gray-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex items-center justify-between w-full py-4 font-serif text-left"
                  >
                    <span className="text-lg">{acc.title}</span>
                    <span className="text-2xl">
                      {openAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {openAccordion === index && (
                    <div className="pb-4 font-sans text-sm leading-relaxed text-charcoal">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <div
                key={related.id}
                onClick={() => navigate(`/product/${related.id}`)}
                className="cursor-pointer group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-cream rounded-lg mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                  {related.name}
                </h3>
                <p className="font-serif text-lg">${related.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
