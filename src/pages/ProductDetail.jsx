import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import Accordion from '@/components/product/Accordion';
import StarRating from '@/components/shared/StarRating';
import ProductCard from '@/components/shared/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-velmora-muted">
        Product not found
      </div>
    );
  }

  const related = products
    .filter((p) => product.related.includes(p.id))
    .slice(0, 3);

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col">
            <p className="text-xs tracking-widest uppercase text-velmora-muted mb-2">
              {product.category}
            </p>
            <h1
              id={`${product.id}-name`}
              className="font-serif text-2xl md:text-3xl tracking-widest-xl uppercase text-velmora-charcoal"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} />
              <span className="text-xs text-velmora-muted">{product.reviews} reviews</span>
            </div>
            <p className="text-xl font-medium mt-4 text-velmora-charcoal">${product.price}</p>
            <p className="text-sm text-velmora-warm leading-relaxed mt-5">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full bg-velmora-charcoal text-white py-4 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors duration-300"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 space-y-1">
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-velmora-gold rounded-full mt-2 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">Complete the Look</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-charcoal">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
