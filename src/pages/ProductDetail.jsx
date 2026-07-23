import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
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
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch when not wearing.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be unworn and in original packaging. View our full return policy here.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-velmora-gold">Home</Link>
        <span className="mx-2 text-gray-300">/</span>
        <Link to="/shop" className="text-gray-500 hover:text-velmora-gold">Shop</Link>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden bg-velmora-warm">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-widest uppercase mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-3xl font-semibold mb-6">${product.price}</p>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Variant Selector */}
          <div>
            <label className="block text-sm font-semibold tracking-wider uppercase mb-3">
              Material
            </label>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 border-2 transition-all duration-300 ${
                    selectedVariant === variant
                      ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                      : 'border-gray-300 hover:border-velmora-charcoal'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold tracking-wider uppercase mb-3">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-charcoal text-white py-4 text-sm tracking-widest uppercase font-semibold hover:bg-velmora-gold hover:text-velmora-charcoal transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>

          {/* Wishlist */}
          <button className="w-full border-2 border-velmora-charcoal py-3 text-sm tracking-widest uppercase font-semibold hover:bg-velmora-charcoal hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>Add to Wishlist</span>
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t">
            {accordionItems.map((item, index) => (
              <div key={item.title} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold tracking-wider uppercase text-sm">
                    {item.title}
                  </span>
                  <span className="text-2xl">
                    {activeAccordion === index ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === index && (
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 tracking-wide text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-velmora-warm mb-4">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg tracking-widest uppercase mb-1">
                  {related.name}
                </h3>
                <p className="text-gray-600 text-sm">{related.description}</p>
                <p className="font-semibold mt-2">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}