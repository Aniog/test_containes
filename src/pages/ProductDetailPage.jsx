import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RefreshCw } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(product?.material || 'Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity }
    });
    dispatch({ type: 'OPEN_CART' });
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description || 'Our finely crafted jewelry piece, designed with attention to detail and made from premium materials. Each piece is carefully inspected to ensure the highest quality standards.'
    },
    {
      title: 'Materials & Care',
      content: '18K Gold Plated over premium base metal. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not in use.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging. Please allow 2-3 business days for order processing.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-velmora-text-light">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-text">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden bg-velmora-cream mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden border-2 ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="product-name text-2xl md:text-3xl mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-text-light">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl text-velmora-gold font-medium mb-8">${product.price}</p>

          <p className="text-velmora-text-light mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Material Selector */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wide mb-3">Material</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border ${
                    selectedMaterial === material
                      ? 'border-velmora-gold bg-velmora-gold text-white'
                      : 'border-velmora-beige hover:border-velmora-gold'
                  } text-sm uppercase tracking-wide transition-all`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block text-sm uppercase tracking-wide mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-velmora-beige flex items-center justify-center hover:border-velmora-gold"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-velmora-beige flex items-center justify-center hover:border-velmora-gold"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full btn-premium mb-4"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Shipping Info */}
          <div className="flex items-center gap-2 text-sm text-velmora-text-light mt-6">
            <Truck size={16} />
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-velmora-text-light mt-2">
            <RefreshCw size={16} />
            <span>30-day return policy</span>
          </div>

          {/* Accordions */}
          <div className="mt-12 space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-velmora-beige">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="uppercase tracking-wide text-sm font-medium">{item.title}</span>
                  {expandedAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === index && (
                  <div className="pb-4 text-sm text-velmora-text-light leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-velmora-cream aspect-square mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch({ type: 'ADD_ITEM', payload: product });
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-white text-velmora-black px-6 py-2 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-velmora-white"
        >
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 className="product-name text-sm mb-2">{product.name}</h3>
        <p className="text-velmora-gold font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductDetailPage;