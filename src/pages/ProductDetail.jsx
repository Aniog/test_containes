import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import Accordion from '../components/ui/Accordion';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <section className="section-padding bg-background">
        <div className="container-editorial text-center">
          <h1 className="font-serif text-3xl text-text">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-6 inline-flex">Back to Shop</Link>
        </div>
      </section>
    );
  }

  const images = product.images[selectedTone] || product.images.gold;

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <nav className="flex items-center gap-2 text-xs text-text-secondary mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-sm bg-surface-warm">
              <img src={images[activeImage]} alt={product.name} className="h-[520px] w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-sm border ${activeImage === idx ? 'border-accent' : 'border-border'}`}
                >
                  <img src={src} alt="" className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-2 font-serif text-3xl md:text-4xl text-text uppercase tracking-[0.18em]">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-text">{product.rating}</span>
              </div>
              <span className="text-xs text-text-secondary">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-6 text-2xl font-medium text-text">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="eyebrow mb-2">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      selectedTone === tone ? 'border-accent bg-accent text-white' : 'border-border text-text hover:border-accent'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow mb-2">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-border">
                <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2 text-text hover:text-accent transition-colors">-</button>
                <span className="px-4 text-sm text-text">{quantity}</span>
                <button type="button" onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2 text-text hover:text-accent transition-colors">+</button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedTone)}
              className="btn-primary mt-8 w-full"
            >
              Add to Cart
            </button>

            <div className="mt-8">
              <Accordion
                items={[
                  { title: 'Description', content: product.description },
                  { title: 'Materials & Care', content: product.care },
                  { title: 'Shipping & Returns', content: product.shipping },
                ]}
              />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-text">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
