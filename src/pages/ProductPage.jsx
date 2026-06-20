import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8">
        <h1 className="font-serif text-3xl text-base-900">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setCartOpen(true);
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <nav className="mb-8 text-xs uppercase tracking-widest text-base-500">
        <Link to="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-accent">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-base-900">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-base-100 aspect-square">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImage === idx ? 'border-accent' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="product-name text-lg md:text-xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              <span className="text-sm font-medium text-base-900">{product.rating}</span>
            </div>
            <span className="text-xs text-base-500">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-4 text-2xl font-medium text-base-900">${product.price}</p>
          <p className="mt-4 text-base leading-relaxed text-base-600">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-base-700">Tone</p>
            <div className="mt-2 flex gap-2">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                    selectedTone === tone
                      ? 'bg-base-900 text-base-50'
                      : 'border border-base-200 text-base-700 hover:border-base-900'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-base-700">Quantity</p>
            <div className="mt-2 inline-flex items-center rounded-full border border-base-200">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center text-base-600 transition-colors hover:text-base-900"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium text-base-900">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center text-base-600 transition-colors hover:text-base-900"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </button>

          <div className="mt-8 space-y-2">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-base-200">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? '' : acc.id)}
                  className="flex w-full items-center justify-between py-4 text-sm font-semibold uppercase tracking-widest text-base-900"
                >
                  {acc.title}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === acc.id && (
                  <p className="pb-4 text-sm leading-relaxed text-base-600">{acc.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="section-title">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
