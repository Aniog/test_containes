import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F8F5F1]">
        <div className="text-center">
          <p className="text-[#6B6058]">Product not found.</p>
          <Link to="/shop" className="text-[#8B7355] mt-4 inline-block">Return to Shop →</Link>
        </div>
      </div>
    );
  }

  const variants = ['Gold', 'Silver'];
  const images = product.images;

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[0.05em] text-[#6B6058] hover:text-[#2C2522] mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/3.5] bg-[#F1EDE6] overflow-hidden mb-3">
              <img 
                src={images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 bg-[#F1EDE6] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? 'border-[#8B7355]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl md:text-4xl tracking-[0.1em] text-[#2C2522]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-medium tabular-nums">${product.price}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-xs text-[#6B6058]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="mt-6 text-[#6B6058] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-3">TONE</div>
              <div className="flex gap-3">
                {variants.map((variant) => (
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
            <div className="mt-6">
              <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#D4C9B8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#F1EDE6] transition-colors text-lg leading-none"
                >
                  −
                </button>
                <span className="px-5 py-2.5 text-sm tabular-nums border-x border-[#D4C9B8]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#F1EDE6] transition-colors text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full mt-8 text-sm"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <p className="text-center text-xs text-[#6B6058] mt-3 tracking-widest">FREE SHIPPING • 30-DAY RETURNS</p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-[#D4C9B8]">
              {/* Description */}
              <div>
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.05em]">Description</span>
                  <span className="text-xl leading-none">{openAccordion === 'description' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'description' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#6B6058] leading-relaxed pr-4">
                    {product.description} Each piece is hand-finished in our atelier and inspected for quality before it reaches you.
                  </div>
                </div>
              </div>

              {/* Materials & Care */}
              <div>
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.05em]">Materials & Care</span>
                  <span className="text-xl leading-none">{openAccordion === 'materials' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'materials' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#6B6058] leading-relaxed pr-4 space-y-2">
                    <p>• 18K gold plated over sterling silver base</p>
                    <p>• Hypoallergenic and nickel-free</p>
                    <p>• Avoid contact with perfumes, lotions, and harsh chemicals</p>
                    <p>• Store in the provided pouch when not in use</p>
                    <p>• Gently polish with a soft cloth to maintain shine</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div>
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="accordion-header w-full text-left"
                >
                  <span className="text-sm tracking-[0.05em]">Shipping & Returns</span>
                  <span className="text-xl leading-none">{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === 'shipping' ? 'open' : ''}`}>
                  <div className="py-4 text-sm text-[#6B6058] leading-relaxed pr-4 space-y-2">
                    <p>• Free worldwide shipping on all orders</p>
                    <p>• Ships within 1–2 business days</p>
                    <p>• 30-day returns for unworn items in original packaging</p>
                    <p>• International duties may apply outside the US/EU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-serif text-2xl tracking-[0.02em]">You May Also Like</h3>
              <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] text-[#8B7355]">VIEW ALL →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
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
