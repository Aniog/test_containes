import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import Accordion from '@/components/ui/Accordion';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState(product?.tone || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="btn-outline mt-4 inline-flex">Back to shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      tone,
      images: product.images,
      quantity,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-secondary">
        <Link to="/" className="hover:text-ink transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-sm border border-border bg-background">
            <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border ${selectedImage === index ? 'border-ink' : 'border-border'} bg-background`}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl tracking-[0.12em] uppercase">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? 'fill-current' : 'text-border-strong'}`} />
              ))}
            </div>
            <span className="text-xs text-ink-secondary">{product.rating} · {product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-2xl font-semibold">${product.price}</p>
          <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="eyebrow">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`h-10 rounded-full border px-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                    tone === option ? 'border-ink bg-ink text-white' : 'border-border-strong text-ink hover:border-ink'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Quantity</p>
            <div className="mt-2 inline-flex items-center border border-border-strong">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="h-10 w-10 flex items-center justify-center text-ink hover:bg-background transition-colors" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="h-10 w-12 flex items-center justify-center text-sm font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} className="h-10 w-10 flex items-center justify-center text-ink hover:bg-background transition-colors" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="btn-primary mt-8 w-full">
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          <div className="mt-8">
            <Accordion
              items={[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
                { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
              ]}
            />
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Continue exploring</p>
            <h2 className="section-heading mt-2">You may also like</h2>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
