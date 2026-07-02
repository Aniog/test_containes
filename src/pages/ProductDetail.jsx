import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-t border-charcoal-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase text-charcoal-900">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-charcoal-500" /> : <ChevronDown className="w-4 h-4 text-charcoal-500" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-charcoal-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal-900 mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-400 mb-8">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-charcoal-100 mb-4 overflow-hidden">
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
                  className={`w-20 h-24 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-charcoal-900' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-xs text-charcoal-400 tracking-widest uppercase mb-2">{product.category}</p>
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-charcoal-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-charcoal-900 mb-6">${product.price}</p>

            <p className="text-sm text-charcoal-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-charcoal-700 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 text-xs tracking-widest uppercase border transition-all ${
                      variant === v
                        ? 'border-charcoal-900 bg-charcoal-900 text-velmora-50'
                        : 'border-charcoal-300 text-charcoal-600 hover:border-charcoal-500'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-charcoal-700 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal-300 hover:bg-charcoal-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal-300 hover:bg-charcoal-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-accent flex items-center justify-center gap-2 py-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-charcoal-500">
              <span>Free shipping</span>
              <span className="text-charcoal-300">|</span>
              <span>30-day returns</span>
              <span className="text-charcoal-300">|</span>
              <span>18K gold plated</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>
                  The {product.name} is a statement piece from our signature collection. 
                  Crafted with meticulous attention to detail, this piece features {product.description.toLowerCase()}. 
                  Each piece is carefully inspected to ensure the highest quality standards.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  Base: Recycled brass with 18K gold plating. Hypoallergenic and nickel-free.
                  To maintain the luster, avoid contact with water, perfume, and lotions. 
                  Store in the provided velvet pouch when not wearing. Gently polish with a soft cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. 
                  Express shipping available at checkout. 30-day hassle-free returns on all unworn items 
                  in original packaging. Gift wrapping available upon request.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <p className="section-subtitle">Complete the Look</p>
            <h2 className="section-title mt-2">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
