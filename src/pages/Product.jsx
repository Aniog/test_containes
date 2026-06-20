import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Star, Minus, Plus, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="text-brand-muted">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-4 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setCartOpen(true);
  };

  const sections = [
    { key: 'description', label: 'Description', content: product.details },
    { key: 'materials', label: 'Materials & Care', content: product.materialsAndCare },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shippingAndReturns },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <nav className="mb-6 text-xs uppercase tracking-widest text-brand-muted">
        <Link to="/" className="hover:text-brand-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-black">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((image, idx) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={`h-20 w-16 overflow-hidden rounded-sm border ${
                  selectedImage === idx ? 'border-brand-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="product-name text-xl md:text-2xl">{product.name}</h1>
          <p className="mt-2 text-lg text-brand-black">${product.price}</p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 text-brand-gold">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-brand-black/80">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-brand-black">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={`flex h-11 min-w-[88px] items-center justify-center rounded-full border px-4 text-xs uppercase tracking-widest transition-colors ${
                    selectedVariant === variant
                      ? 'border-brand-gold bg-brand-gold text-white'
                      : 'border-brand-border text-brand-black hover:border-brand-gold'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-brand-black">Quantity</p>
            <div className="mt-3 inline-flex items-center rounded-full border border-brand-border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center text-brand-black hover:text-brand-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center text-brand-black hover:text-brand-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="mt-8 space-y-2 border-t border-brand-border pt-6">
            {sections.map((section) => (
              <div key={section.key} className="border-b border-brand-border">
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.key ? '' : section.key)}
                  className="flex w-full items-center justify-between py-3 text-left text-sm uppercase tracking-widest text-brand-black"
                >
                  {section.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openSection === section.key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === section.key && (
                  <p className="pb-4 text-sm leading-relaxed text-brand-muted">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="section-heading">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
