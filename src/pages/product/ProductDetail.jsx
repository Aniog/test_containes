import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { Accordion } from '@/components/ui/accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-hover text-sm tracking-widest uppercase">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    openDrawer();
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
      content: product.details,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on orders over $75. 30-day returns for unworn items in original packaging. We use recycled materials for all packaging.',
    },
  ];

  return (
    <div className="min-h-screen bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <nav className="mb-8 text-xs text-muted">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-border">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button key={idx} className="aspect-square rounded-lg overflow-hidden border border-border hover:border-gold transition-colors">
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-ink uppercase">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 text-gold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
              </div>
              <p className="font-serif text-2xl mt-3">${product.price}</p>
            </div>

            <p className="text-muted leading-relaxed">{product.description}</p>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-ink mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border transition-all ${
                      selectedTone === tone ? 'bg-ink text-white border-ink' : 'bg-white text-ink border-border hover:border-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border rounded-full">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-2.5 text-muted hover:text-ink transition-colors" aria-label="Decrease quantity">
                  -
                </button>
                <span className="px-4 text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="p-2.5 text-muted hover:text-ink transition-colors" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-gold hover:bg-gold-hover text-white py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Add to Cart
            </button>

            <div className="border-t border-border pt-6">
              <Accordion>
                {accordions.map((item, index) => (
                  <Accordion.Item key={item.id} index={index}>
                    <Accordion.Trigger index={index}>{item.title}</Accordion.Trigger>
                    <Accordion.Content index={index}>{item.content}</Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-ink mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
