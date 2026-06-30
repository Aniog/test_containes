import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-600 hover:text-gold-700 text-sm tracking-widest uppercase">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
    setCartOpen(true);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-warm-gray mb-8">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-charcoal-900">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-gold-500 text-gold-500" />
                <span className="text-sm text-charcoal-700">{product.rating}</span>
              </div>
              <span className="text-xs text-warm-gray">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-charcoal-900 mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-charcoal-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material selector */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-charcoal-900 font-medium mb-3 block">
                Material
              </label>
              <div className="flex gap-3">
                {['gold', 'silver'].map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-5 py-2.5 text-sm tracking-wide capitalize border transition-all duration-200 ${
                      selectedMaterial === material
                        ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                        : 'border-cream-300 text-charcoal-700 hover:border-charcoal-400'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-charcoal-900 font-medium mb-3 block">
                Quantity
              </label>
              <div className="inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm text-charcoal-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button variant="primary" size="lg" className="w-full mb-4" onClick={handleAddToCart}>
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </Button>

            <p className="text-xs text-warm-gray text-center">
              Free shipping on orders over $75 · 30-day returns
            </p>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion
                description={product.description}
                details={product.details}
                shipping="Free standard shipping on all orders over $75. Express shipping available at checkout. We accept returns within 30 days of delivery. Items must be unworn and in original packaging."
              />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
