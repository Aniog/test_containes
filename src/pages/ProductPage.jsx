import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 pb-16 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#8b7355]">Back to shop</Link>
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
    <div className="pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-8 hover:text-[#8b7355]">
          <ChevronLeft size={16} /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#e5e0d8] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#e5e0d8] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#8b7355]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="product-name text-3xl tracking-[0.1em] mb-3 pr-4">{product.name}</div>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-[#c5a46e] text-[#c5a46e]' : 'text-[#e5e0d8]'} />
                ))}
              </div>
              <span className="text-sm text-[#6b6763]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-[#6b6763] mb-8 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.15em] mb-3">FINISH</div>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
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
              <div className="text-xs tracking-[0.15em] mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#e5e0d8] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-[#f8f6f3]">-</button>
                <span className="px-6 py-2 border-x border-[#e5e0d8]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-[#f8f6f3]">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn btn-primary w-full mb-4">
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#6b6763]">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-12 divide-y divide-[#e5e0d8]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: product.details },
                { key: 'care', label: 'MATERIALS & CARE', content: product.care },
                { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on orders over $75. 30-day returns accepted. Items must be unworn with original packaging.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="accordion-trigger"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6b6763] leading-relaxed ${openAccordion === section.key ? 'open' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-16 border-t border-[#e5e0d8]">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-2">DISCOVER MORE</div>
            <h3 className="font-serif text-3xl tracking-[0.05em]">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
