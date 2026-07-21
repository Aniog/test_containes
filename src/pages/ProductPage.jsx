import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGallery from '@/components/products/ProductGallery';
import ProductAccordion from '@/components/products/ProductAccordion';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [material, setMaterial] = useState(product?.material || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container-editorial py-24 text-center">
        <h1 className="font-serif text-3xl text-brand-ink">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      material,
      image: product.images?.[material]?.[0] || product.images?.gold?.[0],
      quantity,
    });
    openCart();
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-editorial">
        <nav className="flex items-center gap-2 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <ProductGallery images={product.images} material={material} />

          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl text-brand-ink uppercase tracking-wide">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                <span className="text-sm font-semibold text-brand-ink">{product.rating}</span>
              </div>
              <span className="text-xs text-brand-muted">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-brand-ink">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</p>
              <div className="mt-2 flex gap-2">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setMaterial(tone)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                      material === tone ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-brand-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-brand-ink transition-colors hover:text-brand-accent"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-brand-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-brand-ink transition-colors hover:text-brand-accent"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>

            <ProductAccordion
              description={product.details}
              materialsAndCare={product.materialsAndCare}
              shippingAndReturns={product.shippingAndReturns}
            />
          </div>
        </div>

        {related.length > 0 && (
          <section className="py-16 md:py-24">
            <h2 className="section-title">You May Also Like</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductPage;
