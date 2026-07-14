import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B625B] mb-4">Product not found.</p>
          <Link to="/shop" className="btn btn-gold">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => `$${price}`;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  // Related products: same category, exclude current
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = product.images || [];

  return (
    <div className="bg-[#FAF7F2] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F2EDE6] overflow-hidden mb-3">
              <img
                src={images[selectedImageIndex] || images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb flex-shrink-0 ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <div className="product-name text-2xl md:text-3xl mb-2 tracking-[0.12em]">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl text-[#A68A5A]">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm text-[#6B625B]">
                <span className="text-[#C5A46E]">★★★★★</span>
                <span>{product.rating}</span>
                <span className="text-[#9A8F7E]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#6B625B] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B625B] mb-2">Tone</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`variant-pill ${selectedVariant === variant.id ? 'active' : ''}`}
                    disabled={!variant.available}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] uppercase text-[#6B625B] mb-2">Quantity</div>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#E5DDD3] flex items-center justify-center hover:bg-[#F2EDE6] transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input border-x-0"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#E5DDD3] flex items-center justify-center hover:bg-[#F2EDE6] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-3"
            >
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B625B]">Ships in 1–2 business days</p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
                <p className="mt-3">Each piece is hand-finished in our atelier and inspected for quality before it reaches you.</p>
              </Accordion>
              
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  <li>• 18K gold-plated brass</li>
                  <li>• Hypoallergenic and nickel-free</li>
                  <li>• Natural and lab-grown crystals</li>
                  <li>• Avoid contact with perfumes, lotions, and harsh chemicals</li>
                  <li>• Store in the provided pouch when not in use</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Delivery in 3–7 business days.</p>
                <p>30-day returns. Items must be unworn and in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl">You May Also Like</h3>
              <Link to="/shop" className="text-sm tracking-widest text-[#A68A5A] hidden md:block">VIEW ALL →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
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
