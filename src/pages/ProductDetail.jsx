import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-[#B89778] hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordions = [
    { key: 'desc', title: 'Description', content: product.details },
    { key: 'care', title: 'Materials & Care', content: product.care },
    { key: 'ship', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. All orders ship within 1-2 business days. Returns accepted within 30 days of delivery.' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-8 hover:text-[#B89778]">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#E5E0D8] overflow-hidden mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 bg-[#E5E0D8] overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? 'border-[#B89778]' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <div className="product-name text-3xl tracking-[0.15em] mb-3 pr-4">
            {product.name}
          </div>
          <div className="text-2xl font-medium mb-4">${product.price}</div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#B89778" className="text-[#B89778]" />
              ))}
            </div>
            <span className="text-sm text-[#6B6560]">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-[#6B6560] mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="filter-label mb-3">Tone</div>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 text-sm tracking-[0.1em] border transition-all ${
                    selectedVariant === variant
                      ? 'border-[#B89778] bg-[#B89778] text-white'
                      : 'border-[#E5E0D8] hover:border-[#B89778]'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="filter-label mb-3">Quantity</div>
            <div className="flex items-center border border-[#E5E0D8] w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-[#E5E0D8]"
              >
                −
              </button>
              <span className="px-6 py-2 border-x border-[#E5E0D8]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-[#E5E0D8]"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAddToCart} className="btn btn-accent w-full mb-4">
            Add to Cart
          </button>
          <p className="text-center text-xs text-[#6B6560]">Ships in 1-2 business days</p>

          {/* Accordions */}
          <div className="mt-12 pt-8 border-t border-[#E5E0D8] space-y-px">
            {accordions.map((acc) => (
              <div key={acc.key} className="border-b border-[#E5E0D8]">
                <button
                  onClick={() => toggleAccordion(acc.key)}
                  className="accordion-trigger w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-sm tracking-[0.1em] uppercase">{acc.title}</span>
                  <span className="text-xl">{activeAccordion === acc.key ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${activeAccordion === acc.key ? 'open' : ''}`}>
                  <p className="text-[#6B6560] pb-6 text-sm leading-relaxed">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20 pt-16 border-t border-[#E5E0D8]">
        <div className="mb-10">
          <div className="text-xs tracking-[0.2em] uppercase text-[#B89778] mb-2">Curated For You</div>
          <h3 className="font-serif text-3xl">You May Also Like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;