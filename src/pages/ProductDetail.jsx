import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../context/CartContext';
import { Star, Plus, Minus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Product not found</div>
      </div>
    );
  }

  const variants = product.material === 'Gold' ? ['Gold', 'Silver'] : ['Gold'];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2522]">
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#EDE7DC] mb-3 overflow-hidden">
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
                  className={`w-20 h-20 bg-[#EDE7DC] overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#8B7355]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <div className="font-serif text-3xl tracking-[3px] mb-2">{product.name}</div>
            <div className="text-2xl mb-4">${product.price}</div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#8B7355]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#8B7355]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-[#5C5249] leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[2px] mb-3 text-[#8B7355]">FINISH</div>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1px] border transition-all ${
                      selectedVariant === variant
                        ? 'bg-[#2C2522] text-white border-[#2C2522]'
                        : 'border-[#D4C5A9] hover:border-[#8B7355]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[2px] mb-3 text-[#8B7355]">QUANTITY</div>
              <div className="flex items-center border border-[#D4C5A9] w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#EDE7DC]">
                  <Minus size={16} />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#EDE7DC]">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#8B7355] text-white text-sm tracking-[3px] hover:bg-[#6B553F] transition-colors mb-4"
            >
              ADD TO CART
            </button>
            <p className="text-center text-xs text-[#8B7355] tracking-wide">Ships in 1-2 business days</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#D4C5A9] divide-y divide-[#D4C5A9]">
              {[
                { key: 'desc', label: 'DESCRIPTION', content: product.details },
                { key: 'care', label: 'MATERIALS & CARE', content: product.care },
                { key: 'ship', label: 'SHIPPING & RETURNS', content: 'Free worldwide shipping on orders over $75. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery.' },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex justify-between items-center py-5 text-left text-sm tracking-[1.5px]"
                  >
                    {section.label}
                    <span className="text-xl leading-none">{openAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-6 text-sm text-[#5C5249] leading-relaxed pr-8">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <div className="font-serif text-2xl tracking-[1px] mb-8 text-center">You May Also Like</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
