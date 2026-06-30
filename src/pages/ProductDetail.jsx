import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 text-center py-20">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#C5A26F]">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const images = [product.images.primary, product.images.secondary];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.06em] mb-8 hover:text-[#C5A26F]">
          <ChevronLeft size={16} /> BACK TO COLLECTION
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[4/3.2] bg-[#E8E4DC] overflow-hidden mb-3">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImage((activeImage + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-16 overflow-hidden border-2 ${activeImage === idx ? 'border-[#2C2C2C]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.12em] mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="#C5A26F" color="#C5A26F" />
                ))}
              </div>
              <span className="text-sm text-[#9A8F7D]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-[#5A5548] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] mb-3 text-[#C5A26F]">FINISH</div>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`variant-pill ${selectedVariant === v ? 'active' : ''}`}
                  >
                    {v.toUpperCase()} TONE
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] mb-3 text-[#C5A26F]">QUANTITY</div>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 border border-[#E8E4DC] hover:border-[#2C2C2C]">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 border border-[#E8E4DC] hover:border-[#2C2C2C]">+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-gold w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#9A8F7D] tracking-[0.06em]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#E8E4DC]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: 'Each piece is hand-finished in our atelier. Our demi-fine jewelry is designed for everyday wear while maintaining its brilliance over time.' },
                { key: 'materials', label: 'MATERIALS & CARE', content: '18K gold plated over a hypoallergenic base. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch.' },
                { key: 'shipping', label: 'SHIPPING & RETURNS', content: 'Complimentary worldwide shipping. Returns accepted within 30 days. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#5A5548] ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E8E4DC]">
          <h3 className="serif text-2xl tracking-[0.02em] mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/3.5] bg-[#E8E4DC] overflow-hidden mb-3">
                  <img src={p.images.primary} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <p className="product-name text-sm tracking-[0.1em]">{p.name}</p>
                <p className="text-sm text-[#9A8F7D]">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
