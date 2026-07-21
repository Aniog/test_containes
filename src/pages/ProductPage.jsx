import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/home/BestsellersSection';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e8e4df]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="velmora-heading text-sm tracking-[0.1em]">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[#6b6560] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductPage = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="pt-20 sm:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-outline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#9a9490] mb-8">
          <Link to="/" className="hover:text-[#b8860b] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#b8860b] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#6b6560]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-[#f3f0eb] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-16 sm:w-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#2c2825]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-[#b8860b] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="velmora-heading text-2xl sm:text-3xl tracking-[0.1em] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-[#d4a853] fill-[#d4a853]' : 'text-[#e8e4df]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6b6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl sm:text-3xl font-light mb-6">${product.price.toFixed(2)}</p>

            <p className="text-[#6b6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase border transition-colors ${
                      selectedVariant === variant.value
                        ? 'bg-[#2c2825] text-white border-[#2c2825]'
                        : 'bg-transparent text-[#6b6560] border-[#e8e4df] hover:border-[#2c2825]'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-[#e8e4df]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#f3f0eb] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#f3f0eb] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full velmora-btn-primary mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="flex items-center gap-4 text-sm text-[#6b6560]">
              <button className="flex items-center gap-2 hover:text-[#b8860b] transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 hover:text-[#b8860b] transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Presented in our signature packaging, ready for gifting.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials_care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-16 border-t border-[#e8e4df]">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Complete the Look</p>
              <h2 className="velmora-heading text-3xl tracking-[0.1em]">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductPage;
