import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';
import CartDrawer from '../components/ui/CartDrawer';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B645C] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#B89778] hover:text-[#8C6F52] tracking-[0.06em] uppercase text-sm">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.images.primary, product.images.secondary];
  const currentImage = images[selectedImageIndex];

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-2">
          <p><strong>Materials:</strong> {product.material}</p>
          <p><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.</p>
          <p>Our 18K gold plating is designed to last with proper care. Each piece is hypoallergenic and nickel-free.</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Ships within 1-2 business days.</p>
          <p><strong>Returns:</strong> 30-day returns on unworn items in original packaging. Contact us to initiate a return.</p>
          <p>Each piece is carefully packaged in our signature keepsake box.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navigation />

      <div className="container py-8">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm tracking-[0.04em] text-[#6B645C] hover:text-[#2C2825] mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img src={currentImage} alt={product.name} />
            </div>
            <div className="product-thumbnails">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`product-thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pt-2">
            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium text-[#8C6F52]">${product.price}</span>
              <StarRating rating={product.rating} showNumber />
              <span className="text-xs text-[#6B645C]">({product.reviewCount} reviews)</span>
            </div>

            <p className="body-text mb-8">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.08em] uppercase mb-3 text-[#6B645C]">Tone</div>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="text-xs tracking-[0.08em] uppercase mb-3 text-[#6B645C]">Quantity</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#D9D2C7]">
                  <button
                    className="px-4 py-2 text-lg hover:bg-[#F1EDE6] transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-sm tracking-widest">{quantity}</span>
                  <button
                    className="px-4 py-2 text-lg hover:bg-[#F1EDE6] transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#8A8178]">In stock — ships in 1-2 days</span>
              </div>
            </div>

            {/* Add to Cart */}
            <Button variant="primary" fullWidth onClick={handleAddToCart} className="mb-4">
              Add to Cart — ${product.price * quantity}
            </Button>

            <p className="text-center text-xs text-[#8A8178] tracking-[0.04em]">
              Free shipping • 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8E2D9]">
            <h3 className="font-serif text-xl mb-8 tracking-[0.02em]">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;