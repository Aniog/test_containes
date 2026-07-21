import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B655C]">Product not found.</p>
          <Link to="/shop" className="text-sm mt-4 inline-block text-[#8B7355]">
            Return to Shop →
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-[#6B655C] hover:text-[#2C2823] mb-8">
          <ChevronLeft size={16} /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.hoverImage, product.image, product.hoverImage].map((img, idx) => (
                <div key={idx} className="aspect-square bg-[#F0EBE3] overflow-hidden cursor-pointer">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="product-name text-3xl tracking-[0.1em] mb-2">{product.name}</div>
            <div className="text-2xl mb-4">${product.price}</div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#C5A46E] text-[#C5A46E]" : "text-[#D4C9B8]"} />
                ))}
              </div>
              <span className="text-sm text-[#6B655C]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-[#6B655C] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] mb-3 text-[#6B655C]">FINISH</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
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
              <div className="text-xs tracking-[0.1em] mb-3 text-[#6B655C]">QUANTITY</div>
              <div className="flex items-center border border-[#D4C9B8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#F8F5F1]">-</button>
                <span className="px-6 py-2 border-x border-[#D4C9B8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#F8F5F1]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              Add to Cart
            </button>
            <p className="text-center text-xs text-[#6B655C]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#D4C9B8]">
              {[
                { key: 'description', label: 'Description', content: product.details },
                { key: 'materials', label: 'Materials & Care', content: '18K gold plated brass. Wipe gently with a soft cloth. Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place.' },
                { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key} className="border-b border-[#D4C9B8]">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-header w-full text-left"
                  >
                    {section.label}
                    <span className="text-lg">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B655C] ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">MORE TO LOVE</span>
            <h3 className="serif text-2xl mt-1">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="product-card group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EBE3]">
                  <img src={related.image} alt={related.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="product-name text-sm tracking-[0.1em] mb-1">{related.name}</div>
                  <span className="text-sm text-[#6B655C]">${related.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;