import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="btn-primary mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-gold">
        <ChevronLeft className="w-4 h-4" /> BACK TO COLLECTION
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-soft-gray mb-4 overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 border-2 overflow-hidden ${selectedImage === idx ? 'border-charcoal' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</div>
          <div className="text-2xl mb-4">${product.price}</div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-taupe">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <p className="text-taupe leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.1em] mb-3 text-taupe">FINISH</div>
            <div className="flex gap-3">
              {product.variants.map(variant => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                >
                  {variant.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] mb-3 text-taupe">QUANTITY</div>
            <div className="flex items-center border border-divider w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-soft-gray">-</button>
              <span className="px-6 py-2 border-x border-divider">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-soft-gray">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-sm tracking-[0.1em] mb-4">
            ADD TO CART
          </button>
          <p className="text-center text-xs text-taupe">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 divide-y divide-divider">
            {[
              { key: 'desc', label: 'DESCRIPTION', content: 'Each piece is handcrafted with care using premium materials. Our demi-fine jewelry is designed to be worn daily and treasured for years to come.' },
              { key: 'care', label: 'MATERIALS & CARE', content: '18K gold plated over sterling silver base. Hypoallergenic and tarnish-resistant. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
              { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on all orders. 30-day returns accepted. Items must be unworn with original packaging. Please allow 5-10 business days for delivery.' },
            ].map(section => (
              <div key={section.key}>
                <button 
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full text-left"
                >
                  {section.label}
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-taupe leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-16 border-t border-divider">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-gold mb-2">MORE TO LOVE</div>
            <h3 className="serif text-3xl">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;