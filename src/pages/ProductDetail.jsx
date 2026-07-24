import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus, ChevronRight } from 'lucide-react';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-charcoal text-lg">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-square bg-white mb-4 overflow-hidden">
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
                  className={`w-20 h-20 border-2 overflow-hidden ${
                    selectedImage === index ? 'border-gold' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="font-serif text-4xl font-light mb-4 tracking-widest">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium mb-8">${product.price}</p>

            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3 tracking-wider">
                Tone
              </label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-charcoal'
                        : 'border-gray-300 hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3 tracking-wider">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 hover:border-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 hover:border-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal text-cream py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors mb-8"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((section) => (
                <div key={section} className="border-t border-gray-200">
                  <button
                    onClick={() => toggleAccordion(section)}
                    className="w-full flex items-center justify-between py-4 text-sm font-medium tracking-wider uppercase"
                  >
                    {section}
                    <span className="text-gold">{expandedAccordion === section ? '−' : '+'}</span>
                  </button>
                  {expandedAccordion === section && (
                    <div className="pb-4 text-sm text-gray-700 leading-relaxed">
                      {section === 'Description' && (
                        <p>
                          {product.name} - {product.description}. Crafted with the finest materials,
                          this piece embodies quiet luxury and timeless elegance.
                        </p>
                      )}
                      {section === 'Materials & Care' && (
                        <div>
                          <p className="mb-2">• 18K Gold Plated</p>
                          <p className="mb-2">• Hypoallergenic</p>
                          <p className="mb-2">• Nickel-free</p>
                          <p className="mt-4">
                            To maintain the beauty of your jewelry, avoid contact with water,
                            perfumes, and lotions. Store in a cool, dry place.
                          </p>
                        </div>
                      )}
                      {section === 'Shipping & Returns' && (
                        <div>
                          <p className="mb-2">• Free worldwide shipping on all orders</p>
                          <p className="mb-2">• 30-day return policy</p>
                          <p className="mb-2">• Secure packaging</p>
                          <p>Estimated delivery: 5-7 business days</p>
                        </div>
                      )}
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
            <h2 className="font-serif text-3xl font-light mb-8 tracking-wide text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-white mb-4 overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg mb-2 tracking-widest">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-charcoal font-medium">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
