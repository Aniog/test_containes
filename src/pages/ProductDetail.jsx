import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="text-gold underline mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const images = product.images;

  return (
    <div className="container section">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm mb-8 text-text-muted hover:text-text">
        <ArrowLeft size={16} /> Back to collection
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-surface-warm mb-3 overflow-hidden">
            <img 
              src={images[selectedImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-20 h-20 bg-surface-warm overflow-hidden border-2 transition-all ${
                  selectedImageIndex === idx ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl md:text-4xl mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-medium">${product.price}</span>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gold">★★★★</span>
              <span className="text-text-muted">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <p className="body-text text-text-muted mb-8 pr-4">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="caption mb-3">Tone</div>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="caption mb-3">Quantity</div>
            <div className="flex items-center border border-border w-fit">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-surface-warm"
              >
                −
              </button>
              <span className="px-6 py-2 border-x border-border">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-surface-warm"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            variant="primary" 
            className="w-full mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart — ${product.price * quantity}
          </Button>

          <p className="text-center text-xs text-text-muted tracking-widest">
            FREE SHIPPING • 30-DAY RETURNS
          </p>

          {/* Accordions */}
          <div className="mt-10 divide-y divide-border">
            <div>
              <button 
                onClick={() => toggleAccordion('description')}
                className="accordion-header w-full"
              >
                <span>Description</span>
                <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'description' && (
                <div className="accordion-content">
                  {product.longDescription}
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleAccordion('materials')}
                className="accordion-header w-full"
              >
                <span>Materials & Care</span>
                <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'materials' && (
                <div className="accordion-content">
                  <p className="mb-3">• 18K gold-plated brass or sterling silver</p>
                  <p className="mb-3">• Hypoallergenic and nickel-free</p>
                  <p className="mb-3">• Hand-set premium crystals</p>
                  <p className="mt-4 text-xs">To care for your piece: avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch. Polish gently with a soft cloth.</p>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleAccordion('shipping')}
                className="accordion-header w-full"
              >
                <span>Shipping & Returns</span>
                <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
              </button>
              {openAccordion === 'shipping' && (
                <div className="accordion-content">
                  <p className="mb-3">• Free worldwide shipping on all orders</p>
                  <p className="mb-3">• Ships within 1-2 business days</p>
                  <p className="mb-3">• 30-day returns for unworn items in original packaging</p>
                  <p className="mt-4 text-xs">Each piece is carefully packaged in our signature velvet pouch and gift box.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl">You may also like</h3>
          <Link to="/shop" className="text-sm underline underline-offset-4">View all</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
