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
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B89B6E]">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.08em] mb-8 hover:text-[#B89B6E]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#F2EFEA] mb-4 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.image, product.imageAlt, product.image, product.imageAlt].map((img, i) => (
              <div key={i} className="aspect-square bg-[#F2EFEA] overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="product-name text-3xl tracking-[0.15em] mb-2">{product.name}</p>
          <p className="text-2xl mb-4">${product.price}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-[#6B655F]">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-[#6B655F] leading-relaxed mb-8">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="uppercase tracking-[0.1em] text-xs mb-3">Tone</p>
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
            <p className="uppercase tracking-[0.1em] text-xs mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5DFD6] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
              <span className="px-6 py-2 border-x border-[#E5DFD6]">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary w-full mb-8">
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="border-t border-[#E5DFD6]">
            {[
              { key: 'desc', label: 'Description', content: product.description },
              { key: 'materials', label: 'Materials & Care', content: `Crafted from ${product.material}. To maintain its luster, avoid contact with harsh chemicals and store in a dry place.` },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of purchase. Items must be in original condition.' },
            ].map((section) => (
              <div key={section.key} className="border-b border-[#E5DFD6]">
                <button
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-trigger"
                >
                  {section.label}
                  <span>{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                {openAccordion === section.key && (
                  <div className="accordion-content">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t border-[#E5DFD6]">
        <h3 className="serif text-2xl mb-8 text-center">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/3] bg-[#F2EFEA] mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="product-name text-sm tracking-[0.12em]">{p.name}</p>
              <p className="text-sm text-[#6B655F]">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;