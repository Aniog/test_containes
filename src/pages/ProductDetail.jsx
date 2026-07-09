import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        <Navbar />
        <div className="pt-24 pb-20 text-center px-6">
          <h1 className="heading-lg mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentImages = product.images[selectedVariant] || product.images.Gold;
  const galleryImages = [currentImages.primary, currentImages.secondary];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-3"><strong>Materials:</strong> {product.material}</p>
          <p>{product.care}</p>
        </>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <>
          <p className="mb-3">Free worldwide shipping on all orders. Delivery in 5–10 business days.</p>
          <p>30-day returns. Items must be unworn and in original packaging.</p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3.2] bg-[#E5DFD6] overflow-hidden mb-3">
              <img
                src={galleryImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-16 overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-[#1C1917]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl tracking-[0.06em] mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1 text-sm text-[#B8976A]">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-[#6B645E] ml-1">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-[#6B645E] mb-8 pr-4">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] mb-2 text-[#6B645E]">TONE</div>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setSelectedImageIndex(0);
                    }}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.1em] mb-2 text-[#6B645E]">QUANTITY</div>
              <div className="flex items-center border border-[#E5DFD6] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#F5F2ED]"
                >
                  −
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#F5F2ED]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-gold w-full mb-4"
            >
              ADD TO CART
            </button>

            <p className="text-center text-xs text-[#6B645E] tracking-wider">
              Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#E5DFD6]">
              {accordions.map((acc) => (
                <div key={acc.key}>
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="accordion-header w-full text-left"
                  >
                    <span>{acc.title}</span>
                    <span className="text-xl leading-none">{activeAccordion === acc.key ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === acc.key && (
                    <div className="accordion-content text-sm">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="heading-md mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;