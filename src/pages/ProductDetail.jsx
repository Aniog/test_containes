import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-velmora-muted mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];
  const images = product.images || [];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-velmora-muted hover:text-velmora-base mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3.5] bg-velmora-surface mb-3 overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-velmora-surface overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-velmora-gold' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="product-name serif text-3xl tracking-[0.08em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-1 text-sm text-velmora-muted">
                <div className="flex text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span>{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-velmora-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            <div className="mb-6">
              <p className="uppercase tracking-[0.15em] text-xs text-velmora-muted mb-3">Tone</p>
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

            {/* QUANTITY */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.15em] text-xs text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:border-velmora-gold"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:border-velmora-gold"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <button 
              onClick={handleAddToCart}
              className={`btn w-full mb-4 transition-all ${addedToCart ? 'btn-gold' : 'btn-primary'}`}
              disabled={addedToCart}
            >
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <p className="text-center text-xs text-velmora-muted tracking-wide">Ships in 1–2 business days</p>

            {/* ACCORDIONS */}
            <div className="mt-10 divide-y divide-velmora-border">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full"
                >
                  Description
                  <span className="text-lg leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-velmora-text-secondary leading-relaxed ${openAccordion === 'description' ? 'open' : ''}`}>
                  {product.details}
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full"
                >
                  Materials & Care
                  <span className="text-lg leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-velmora-text-secondary leading-relaxed ${openAccordion === 'materials' ? 'open' : ''}`}>
                  {product.care}
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full"
                >
                  Shipping & Returns
                  <span className="text-lg leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content text-sm text-velmora-text-secondary leading-relaxed ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  Free worldwide shipping on orders over $50. All orders ship within 1–2 business days. 
                  Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="serif text-2xl tracking-[0.05em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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