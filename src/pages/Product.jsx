import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { Accordion } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-ink mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
          <Link to="/" className="hover:text-brand-ink transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="hover:text-brand-ink transition-colors">Shop</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'h-20 w-20 rounded-lg overflow-hidden border-2 transition-all',
                    selectedImage === index ? 'border-brand-ink' : 'border-transparent opacity-70 hover:opacity-100'
                  )}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  <span className="text-sm font-medium text-brand-ink">{product.rating}</span>
                </div>
                <span className="text-sm text-brand-muted">({product.reviewCount} reviews)</span>
              </div>
              <p className="text-2xl font-semibold text-brand-ink">${product.price}</p>
            </div>

            <p className="text-brand-muted leading-relaxed">{product.description}</p>

            <div>
              <label className="block text-sm font-medium text-brand-ink mb-3">Tone</label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all border',
                      selectedVariant === variant
                        ? 'border-brand-ink bg-brand-ink text-white'
                        : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-ink mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full border border-brand-line hover:border-brand-ink transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="w-full btn-primary py-4 text-base">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="flex items-center gap-2 text-sm text-brand-muted">
              <Check className="h-4 w-4 text-brand-accent" />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <Accordion
            items={[
              { title: 'Description', content: product.description, defaultOpen: true },
              { title: 'Materials & Care', content: <div dangerouslySetInnerHTML={{ __html: `<p class="mb-2"><strong>Materials:</strong> ${product.materials}</p><p>${product.care}</p>` }} /> },
              { title: 'Shipping & Returns', content: <div dangerouslySetInnerHTML={{ __html: `<p class="mb-2">${product.shipping}</p><p>${product.returns}</p>` }} /> }
            ]}
          />
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
