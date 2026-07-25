import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById, getRelatedProducts, products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="text-velmora-taupe mb-4">Product not found</p>
          <Link to="/shop" className="text-sm tracking-widest">Back to Shop →</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];
  const variants = ['gold', 'silver'];

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest text-velmora-taupe hover:text-velmora-base mb-8">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-velmora-base/5 mb-4 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 border-2 overflow-hidden ${selectedImage === idx ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <p className="product-name text-3xl tracking-[0.12em] mb-3 pr-4">{product.name}</p>
            <p className="text-2xl tabular-nums mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-velmora-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
              </div>
              <span className="text-sm text-velmora-taupe">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-velmora-taupe leading-relaxed mb-8 max-w-prose">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] mb-3 text-velmora-taupe">TONE</p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill px-6 py-2 text-sm capitalize ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] mb-3 text-velmora-taupe">QUANTITY</p>
              <div className="inline-flex border border-velmora-taupe/30">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-velmora-base/5">-</button>
                <span className="px-6 py-2 tabular-nums border-x border-velmora-taupe/30">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-velmora-base/5">+</button>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full mb-4" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <p className="text-center text-xs text-velmora-taupe tracking-widest">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-velmora-taupe/20 border-y border-velmora-taupe/20">
              {[
                { id: 'desc', label: 'Description', content: product.details },
                { id: 'care', label: 'Materials & Care', content: '18K gold plated over brass. To maintain luster, avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Polish gently with a soft cloth.' },
                { id: 'ship', label: 'Shipping & Returns', content: 'Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.id}>
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[0.1em]"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{activeAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${activeAccordion === section.id ? 'open' : ''}`}>
                    <p className="text-velmora-taupe pb-6 pr-4 leading-relaxed text-sm">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-velmora-gold mb-3">YOU MAY ALSO LIKE</p>
          <h3 className="serif-heading text-3xl tracking-wider mb-8">Complete the Look</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/3.5] bg-velmora-base/5 mb-4 overflow-hidden">
                  <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="product-name text-sm tracking-widest mb-1 pr-2 group-hover:text-velmora-gold transition-colors">{item.name}</p>
                <p className="text-sm text-velmora-taupe">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;