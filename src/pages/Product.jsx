import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setCartOpen(true);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div>
          <p className="mb-2">{product.details}</p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div>
          <p className="mb-2">Free worldwide shipping on all orders over $75.</p>
          <p className="mb-2">Standard delivery: 5-10 business days.</p>
          <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-surface-muted overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-surface-muted overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="font-serif text-2xl mb-6">${product.price}</p>
            <p className="text-sm text-ink-soft leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                      variant === v
                        ? 'bg-ink text-surface border-ink'
                        : 'bg-transparent text-ink border-base-border hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-base-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-ink hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-2.5 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-ink hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="space-y-0 border-t border-base-border/60">
              {accordions.map((item) => (
                <div key={item.id} className="border-b border-base-border/60">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium tracking-wide">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-muted transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-ink-muted leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">You May Also Like</p>
                <h2 className="font-serif text-3xl md:text-4xl">Related Products</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Product;
