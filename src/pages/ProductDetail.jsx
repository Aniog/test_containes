import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-velmora-gold hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    { 
      title: 'Description', 
      content: product.description 
    },
    { 
      title: 'Materials & Care', 
      content: `Material: ${product.material}\n\nCare: To maintain the beauty of your Velmora jewelry, avoid contact with water, perfume, and lotions. Store in a cool, dry place when not in use.` 
    },
    { 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. See our shipping page for more details.' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div>
          <div className="aspect-square bg-velmora-light-gray overflow-hidden">
            <img 
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-light-gray overflow-hidden border-2 
                            ${selectedImage === index ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="font-serif text-3xl uppercase tracking-wider mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(product.rating) ? '#c9a96e' : 'none'}
                  className="text-velmora-gold"
                />
              ))}
            </div>
            <span className="text-sm text-velmora-warm-gray">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl font-serif mb-6">${product.price}</p>
          <p className="text-velmora-charcoal mb-8">{product.description}</p>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="text-sm uppercase tracking-wider mb-3 block">Tone</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border uppercase text-sm tracking-wider transition-colors
                              ${selectedVariant === variant 
                                ? 'bg-velmora-black text-white border-velmora-black' 
                                : 'border-velmora-warm-gray hover:border-velmora-black'}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <label className="text-sm uppercase tracking-wider mb-3 block">Quantity</label>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-velmora-warm-gray hover:border-velmora-black transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-velmora-warm-gray hover:border-velmora-black transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product, quantity, selectedVariant)}
            className="w-full bg-velmora-black text-white py-4 uppercase tracking-wider text-sm 
                     hover:bg-velmora-charcoal transition-colors mb-8"
          >
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div key={item.title} className="border-t border-velmora-light-gray">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                  className="w-full flex justify-between items-center py-4 text-sm uppercase tracking-wider"
                >
                  {item.title}
                  {expandedAccordion === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedAccordion === index && (
                  <div className="pb-4 text-sm text-velmora-charcoal leading-relaxed">
                    {item.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-velmora-light-gray">
          <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-square bg-velmora-light-gray overflow-hidden mb-4">
                  <img 
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-1">{related.name}</h3>
                <p className="text-sm text-velmora-warm-gray">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
