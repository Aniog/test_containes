import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Plus, Minus, Star, ChevronRight, Truck, RefreshCw } from 'lucide-react';
import products from '../../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging and unused condition.'
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-warm-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-velmora-medium-gray mb-12">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-velmora-cream mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-gold/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Product Name */}
            <h1 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-[0.2em] mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-light-gray'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-medium-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-velmora-gold mb-8">
              ${product.price}
            </p>

            {/* Short Description */}
            <p className="text-velmora-dark-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector (Gold/Silver tone) */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Material</label>
              <div className="flex space-x-3">
                <button className="px-6 py-2 border-2 border-velmora-gold bg-velmora-gold/10 text-sm">
                  18K Gold
                </button>
                <button className="px-6 py-2 border-2 border-velmora-light-gray hover:border-velmora-gold text-sm transition-colors">
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-light-gray hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-light-gray hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-velmora-warm-white py-4 
                         hover:bg-velmora-gold hover:text-velmora-warm-black 
                         transition-all duration-300 font-medium tracking-wide mb-8"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col space-y-3 mb-12">
              <div className="flex items-center space-x-3 text-sm text-velmora-dark-gray">
                <Truck className="w-4 h-4 text-velmora-gold" />
                <span>Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-velmora-dark-gray">
                <RefreshCw className="w-4 h-4 text-velmora-gold" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-light-gray">
              {accordionItems.map((item, index) => (
                <div key={index} className="border-b border-velmora-light-gray">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className={`transform transition-transform ${
                      activeAccordion === index ? 'rotate-45' : ''
                    }`}>+</span>
                  </button>
                  {activeAccordion === index && (
                    <div className="pb-4 text-sm text-velmora-dark-gray leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-velmora-cream mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-[0.2em] mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-velmora-gold font-medium">${relatedProduct.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
