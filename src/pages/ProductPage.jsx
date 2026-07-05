import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e8e2db]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-[0.1em] uppercase">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && <div className="pb-4 text-sm text-[#6b6560] leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <main className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-[#6b6560] mb-4">Product not found</p>
          <Link to="/shop" className="text-sm text-[#b8860b] underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#6b6560] mb-8">
          <Link to="/" className="hover:text-[#b8860b] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#b8860b] transition-colors capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#f5f0eb] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#b8860b]' : 'border-transparent hover:border-[#e8e2db]'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[#b8860b]/10 text-[#b8860b] text-[10px] tracking-[0.15em] uppercase mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase mb-2">{product.name}</h1>
            <p className="text-[#6b6560] text-sm mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#b8860b] text-[#b8860b]'
                        : 'text-[#e8e2db]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">{product.rating}</span>
              <span className="text-sm text-[#6b6560]">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl mb-8">${product.price}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-[0.1em] uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#b8860b] text-[#b8860b] bg-[#b8860b]/5'
                        : 'border-[#e8e2db] text-[#6b6560] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#e8e2db] flex items-center justify-center hover:border-[#b8860b] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#e8e2db] flex items-center justify-center hover:border-[#b8860b] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#333] transition-colors flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-[#6b6560] text-center">
              Free shipping on all orders · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                {product.description}
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                {product.materials}
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-[#e8e2db]">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Complete the Look</p>
              <h2 className="font-serif text-3xl md:text-4xl">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
