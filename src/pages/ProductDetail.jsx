import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import Accordion from '@/components/product/Accordion';
import RelatedProductCard from '@/components/product/RelatedProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-brand-dark">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-brand-gold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-muted">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-dark">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-brand-dark tracking-wide uppercase" style={{ letterSpacing: '0.15em' }}>
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-border'}`} />
                ))}
              </div>
              <span className="font-sans text-sm text-brand-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-brand-dark mt-4">${product.price}</p>

            <p className="font-sans text-sm text-brand-muted mt-4 leading-relaxed">
              {product.description}. Crafted with premium {product.material.toLowerCase()} materials for lasting shine and comfort. Each piece is hypoallergenic and nickel-free.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="font-sans text-xs uppercase tracking-super-wide text-brand-dark block mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`font-sans text-xs uppercase tracking-wide px-6 py-2.5 border transition-colors ${
                      variant === v
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-border text-brand-dark hover:border-brand-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="font-sans text-xs uppercase tracking-super-wide text-brand-dark block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-dark transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-brand-dark border-x border-brand-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-dark transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-brand-gold text-white font-sans text-xs uppercase tracking-super-wide py-4 hover:bg-brand-gold-dark transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning addition to any jewelry collection. {product.description}, this piece embodies the perfect balance of modern design and timeless elegance. Suitable for everyday wear or special occasions.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over 925 Sterling Silver</li>
                  <li>• Hypoallergenic & Nickel-free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with perfume, lotions, and water</li>
                  <li>• Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery: 2–4 business days (additional fee)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-dark tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
