import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="velmora-accordion">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="velmora-heading text-lg text-[#1a1a1a]">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#6b6560]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#6b6560]" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-[#6b6560] text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem, toggleDrawer } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl text-[#1a1a1a] mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toggleDrawer();
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />
      <CartDrawer />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-[#6b6560] hover:text-[#c9a96e] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div>
              {/* Main image */}
              <div className="aspect-[3/4] bg-[#f5f0eb] overflow-hidden mb-4">
                <img
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-[#f5f0eb] overflow-hidden transition-all duration-300 ${
                      selectedImage === index ? 'ring-2 ring-[#c9a96e]' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      data-strk-img-id={`product-${product.id}-thumb-${index}`}
                      data-strk-img={`[${product.id}-name] detail ${index + 1}`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              {product.badge && (
                <span className="inline-block bg-[#1a1a1a] text-white text-[10px] uppercase tracking-wider px-3 py-1 mb-4">
                  {product.badge}
                </span>
              )}

              <h1 className="velmora-product-name text-2xl sm:text-3xl text-[#1a1a1a] mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#c9a96e] text-[#c9a96e]' : 'text-[#e8e4df]'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6b6560]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="velmora-heading text-2xl text-[#1a1a1a] mb-6">
                ${product.price}
              </p>

              <p className="text-[#6b6560] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <label className="text-sm text-[#1a1a1a] mb-3 block">Color</label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-[#1a1a1a] text-white'
                          : 'border border-[#e8e4df] text-[#6b6560] hover:border-[#c9a96e]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="text-sm text-[#1a1a1a] mb-3 block">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-[#e8e4df] hover:border-[#c9a96e] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-[#e8e4df] hover:border-[#c9a96e] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="velmora-btn-dark w-full flex items-center justify-center gap-3 py-4"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion
                  title="Description"
                  isOpen={openAccordion === 'description'}
                  onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
                >
                  <p>{product.description}</p>
                  <p className="mt-3">Each piece arrives in our signature Velmora gift box, ready for gifting or keeping close.</p>
                </Accordion>

                <Accordion
                  title="Materials & Care"
                  isOpen={openAccordion === 'materials'}
                  onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
                >
                  <p>{product.materials}</p>
                  <p className="mt-3">To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                </Accordion>

                <Accordion
                  title="Shipping & Returns"
                  isOpen={openAccordion === 'shipping'}
                  onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                >
                  <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
                  <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="velmora-heading text-3xl sm:text-4xl text-[#1a1a1a] text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
