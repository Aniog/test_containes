import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState('description');

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
          Return to shop
        </Link>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const sections = [
    { id: 'description', title: 'Description', body: product.description },
    { id: 'materials', title: 'Materials & Care', body: product.care },
    { id: 'shipping', title: 'Shipping & Returns', body: 'Free worldwide shipping on orders over $75. 30-day returns for unworn items in original packaging.' },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-background">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${
                  selectedImage === idx ? 'border-accent' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="section-subtitle">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl uppercase tracking-wide md:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <div className="flex items-center gap-1 text-accent">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium text-ink">{product.rating}</span>
            </div>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-2xl font-medium">${product.price}</p>
          <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Tone</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                    variant === tone ? 'border-ink bg-ink text-white' : 'border-border hover:border-ink'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="rounded-full p-2 hover:bg-background"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="rounded-full p-2 hover:bg-background"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, variant, quantity)}
              className="btn-primary flex-1"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-border">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenSection((prev) => (prev === section.id ? '' : section.id))}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide">{section.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === section.id && (
                  <div className="px-5 pb-4 text-sm text-muted leading-relaxed">{section.body}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="section-title">You May Also Like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
