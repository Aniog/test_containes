import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      setSelectedVariant(found.variants[0]);
      const related = products.filter(p => p.category === found.category && p.id !== found.id).slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-lg text-taupe">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-taupe hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={14} className="text-taupe" />
          <Link to="/shop" className="text-taupe hover:text-gold transition-colors">Shop</Link>
          <ChevronRight size={14} className="text-taupe" />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 overflow-hidden bg-ivory">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 
              className="product-name text-2xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {product.name}
            </h1>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">({product.reviews} reviews)</span>
            </div>

            <p className="text-3xl font-light mb-8">${product.price}</p>

            <p className="text-base mb-8 leading-relaxed font-light">
              {product.description}. Crafted with meticulous attention to detail, this piece embodies 
              the Velmora commitment to creating jewelry that celebrates life's precious moments.
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <label className="block text-sm uppercase tracking-wider mb-4 font-medium">
                  Tone
                </label>
                <div className="flex space-x-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 border text-sm uppercase tracking-wider transition-all ${
                        selectedVariant === variant
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-charcoal/30 hover:border-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wider mb-4 font-medium">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-charcoal/30 flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-charcoal/30 flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal text-cream py-4 text-sm uppercase tracking-wider font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center space-x-2 mb-12"
            >
              <ShoppingBag size={18} />
              <span>Add to Cart - ${product.price * quantity}</span>
            </button>

            {/* Accordions */}
            <div className="border-t border-gold/20">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { 
                  id: 'materials', 
                  title: 'Materials & Care',
                  content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and cosmetics. Store in the provided pouch when not in use.'
                },
                { 
                  id: 'shipping', 
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Each piece arrives in our signature Velmora gift box, perfect for gifting or treating yourself.'
                }
              ].map(section => (
                <div key={section.id} className="border-b border-gold/20">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm uppercase tracking-wider font-medium">
                      {section.title}
                    </span>
                    <Plus
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeAccordion === section.id ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === section.id && (
                    <div className="pb-4">
                      <p className="text-sm leading-relaxed font-light">{section.content}</p>
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
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                You May Also Like
              </h2>
              <div className="w-16 h-px bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group block">
                  <div className="relative overflow-hidden aspect-square bg-ivory mb-4">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-2">{related.name}</h3>
                  <p className="text-lg font-light">${related.price}</p>
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
