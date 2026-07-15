import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedVariant(foundProduct.variants[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container-responsive py-20 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container-responsive py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          <div className="mb-4 overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="flex gap-2">
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

        {/* Right: Product Info */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-ultra-wide mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          <p className="text-2xl font-light mb-6">${product.price}</p>

          <p className="text-gray-600 font-light mb-8">{product.description}</p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider mb-3">Finish</p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider font-light transition-colors ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'border-gray-300 hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-2 border-l border-r border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-ultra-wide text-sm font-light hover:bg-velmora-gold-dark transition-colors mb-8 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-0">
            {[
              {
                title: 'Description',
                content: product.description + '. Each piece is carefully crafted with attention to detail, using premium materials that are designed to last. Our demi-fine jewelry combines the beauty of fine jewelry with everyday wearability.'
              },
              {
                title: 'Materials & Care',
                content: '18K Gold Plated on brass base. Nickel-free and hypoallergenic. To care for your jewelry, avoid contact with water, perfume, and cosmetics. Store in a cool, dry place when not wearing. Clean gently with a soft cloth.'
              },
              {
                title: 'Shipping & Returns',
                content: 'Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging. Please allow 2-3 business days for order processing. Tracking information will be provided via email.'
              }
            ].map((accordion, index) => (
              <div key={accordion.title} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="accordion-trigger w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-wider font-light">{accordion.title}</span>
                  <span className="text-velmora-gold">{activeAccordion === index ? '−' : '+'}</span>
                </button>
                {activeAccordion === index && (
                  <div className="accordion-content pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{accordion.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">You May Also Like</h2>
        <div className="elegant-divider mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(related => (
            <Link key={related.id} to={`/product/${related.id}`} className="product-card group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-600"
                />
              </div>
              <h3 className="product-name mb-2">{related.name}</h3>
              <p className="text-sm font-light">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
