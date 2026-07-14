import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/button';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setCartOpen } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-serif text-2xl text-charcoal">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">
          Return to shop
        </Link>
      </section>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        tone: selectedTone,
        images: product.images,
      });
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
          <p className="text-sm text-muted">{product.materials}</p>
          <p className="mt-2 text-sm text-muted">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: <p className="text-sm text-muted">{product.shipping}</p>,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="space-y-4">
          <div className="overflow-hidden bg-cream aspect-[3/4]">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, idx) => (
              <div key={idx} className="overflow-hidden bg-cream aspect-square">
                <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">{product.category}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">{product.name.toUpperCase()}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 text-gold">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm">{product.rating}</span>
            </div>
            <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-4 font-serif text-2xl text-charcoal">${product.price}</p>
          <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal mb-2">Tone</p>
            <div className="flex gap-2">
              {['gold', 'silver'].map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`px-4 py-2 text-xs tracking-[0.18em] uppercase border transition-all ${
                    selectedTone === tone
                      ? 'border-charcoal bg-charcoal text-white'
                      : 'border-border text-charcoal hover:border-charcoal'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal mb-2">Quantity</p>
            <div className="inline-flex items-center border border-border">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="accent" className="w-full" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>

          <div className="mt-8 border-t border-border divide-y divide-border">
            {accordions.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs tracking-[0.18em] uppercase text-charcoal">{item.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform duration-300 ${
                      activeAccordion === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === item.id && <div className="pb-4">{item.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 md:mt-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">You May Also Like</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Related Pieces</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
