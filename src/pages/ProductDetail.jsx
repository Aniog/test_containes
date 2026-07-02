import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="btn btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  // Create image array from primary and secondary
  const images = [product.image, product.imageSecondary].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-base-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/3.5] bg-base-100 mb-4 overflow-hidden">
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`gallery-thumb w-20 h-20 overflow-hidden ${selectedImageIndex === idx ? 'active' : ''}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="pt-2">
            <h1 className="product-name text-3xl tracking-[0.06em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-light">${product.price}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-base-300'}`} />
                  ))}
                </div>
                <span className="text-base-600 ml-1">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-base-700 leading-relaxed mb-8 pr-4">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.1em] text-gold-600 mb-3">TONE</div>
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
              <div className="text-xs tracking-[0.1em] text-gold-600 mb-3">QUANTITY</div>
              <div className="flex items-center border border-base-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-base-100"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-base-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-base-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full mb-4"
            >
              ADD TO CART
            </button>

            <p className="text-center text-xs tracking-[0.05em] text-base-600">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-base-200">
              <Accordion title="DESCRIPTION" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="MATERIALS & CARE">
                {product.care}
              </Accordion>
              <Accordion title="SHIPPING & RETURNS">
                Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. 
                Items must be unworn and in original packaging. Please contact us for return authorization.
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-2xl tracking-[0.02em] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
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
