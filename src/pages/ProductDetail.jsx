import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/ui/StarRating';
import { ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id || 0, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="underline">Return to shop</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-velmora-text-muted hover:text-velmora-text mb-8">
          <ChevronLeft size={16} className="mr-1" /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-bg overflow-hidden mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-velmora-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.12em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-velmora-text-muted">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-velmora-text-muted leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] text-velmora-text-muted mb-3">TONE</p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] text-velmora-text-muted mb-3">QUANTITY</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:bg-velmora-bg"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:bg-velmora-bg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-3">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-velmora-text-muted tracking-wider">
              FREE SHIPPING ON ALL ORDERS
            </p>

            {/* Accordions */}
            <div className="mt-10 space-y-px border-t border-velmora-border">
              {[
                { id: 'desc', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: '18K gold plated over sterling silver. Hypoallergenic and tarnish-resistant. Clean gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns on unworn items in original packaging. We cover return shipping on defective items.' },
              ].map((section) => (
                <div key={section.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="accordion-header w-full flex justify-between items-center py-5 text-left"
                  >
                    <span className="text-sm tracking-[0.05em]">{section.title}</span>
                    <span className={`text-xl transition-transform ${openAccordion === section.id ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`accordion-content text-sm text-velmora-text-muted leading-relaxed pb-5 ${openAccordion === section.id ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h3 className="serif text-2xl mb-8 tracking-[0.02em]">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
