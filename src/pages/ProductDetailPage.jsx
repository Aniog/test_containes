import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/collection/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8E4DF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[#6B6560] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="serif-heading text-2xl text-[#6B6560] mb-4">Piece Not Found</p>
          <Link to="/shop" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.badge === product.badge))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <nav className="text-xs text-[#9B9590] tracking-wider">
          <Link to="/" className="hover:text-[#B8956A] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#B8956A] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[#6B6560] capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-[#F3F0EB] overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-[#F3F0EB] overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#B8956A]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-[#2C2420] text-white text-[10px] tracking-wider uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl text-[#1A1A1A] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-[#E8E4DF]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">{product.rating}</span>
              <span className="text-sm text-[#9B9590]">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="serif-heading text-2xl text-[#1A1A1A] mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#B8956A] bg-[#B8956A] text-white'
                        : 'border-[#E8E4DF] text-[#6B6560] hover:border-[#B8956A]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#B8956A] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#E8E4DF] flex items-center justify-center hover:border-[#B8956A] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-dark flex items-center justify-center gap-3 py-4"
            >
              <ShoppingBag size={18} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#9B9590]">
              <span>Free Shipping</span>
              <span className="text-[#E8E4DF]">|</span>
              <span>30-Day Returns</span>
              <span className="text-[#E8E4DF]">|</span>
              <span>18K Gold Plated</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          <Accordion title="Description" defaultOpen>
            <p>{product.description}</p>
            <p className="mt-3">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily while maintaining its beauty and luster.</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p>{product.materials}</p>
            <p className="mt-3">To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
            <p><strong>Returns:</strong> We offer a 30-day return policy for unworn items in original packaging. Contact our team for a prepaid return label.</p>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#F3F0EB] section-padding">
          <div className="container-custom">
            <h2 className="serif-heading text-2xl md:text-3xl font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
