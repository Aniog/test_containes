import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="heading-lg">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant }, selectedVariant);
    openCart();
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const accordionSections = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `Material: ${product.material}\n\nCare Instructions: Avoid contact with perfumes, lotions, and water. Store in a cool, dry place. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. See our returns page for full details.',
    },
  ];

  return (
    <div className="pt-32 md:pt-40">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
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
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-gold-light'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Product Name */}
            <div>
              <h1 className="product-name text-2xl md:text-3xl mb-4">
                {product.name.toUpperCase()}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating)
                          ? 'text-velmora-gold'
                          : 'text-velmora-sand'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-sans text-sm text-velmora-charcoal-light">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-3xl text-velmora-charcoal mb-6">
                ${product.price}
              </p>
            </div>

            {/* Short Description */}
            <p className="font-sans text-base text-velmora-charcoal-light leading-relaxed">
              {product.description}. Crafted with the finest materials for lasting beauty.
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-3">
                <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">
                  Tone
                </h3>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 border-2 font-sans text-sm uppercase tracking-wider 
                                 transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-charcoal/20 hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-velmora-charcoal/20 
                             flex items-center justify-center hover:border-velmora-gold 
                             transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-velmora-charcoal/20 
                             flex items-center justify-center hover:border-velmora-gold 
                             transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-charcoal text-white py-4 font-sans text-sm 
                         uppercase tracking-ultra-wide hover:bg-velmora-gold 
                         transition-all duration-500 hover:shadow-premium
                         flex items-center justify-center gap-2 group"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-8 border-t border-velmora-sand">
              {accordionSections.map((section, index) => (
                <div key={index} className="border-b border-velmora-sand pb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-2
                               font-sans text-sm uppercase tracking-wider text-velmora-charcoal
                               hover:text-velmora-gold transition-colors"
                  >
                    {section.title}
                    {expandedAccordion === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {expandedAccordion === index && (
                    <div className="pt-2 pb-4 font-sans text-sm text-velmora-charcoal-light leading-relaxed">
                      {section.content.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-velmora-sand">
          <h2 className="heading-md text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden bg-velmora-warm mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 
                                 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-2">{product.name.toUpperCase()}</h3>
                  <p className="font-sans text-sm text-velmora-charcoal-light">
                    ${product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
