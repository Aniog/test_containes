import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-velmora-accent">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem(product, tone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery in original condition.',
    },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 md:w-24 md:h-32 overflow-hidden border transition-colors ${
                    selectedImage === idx
                      ? 'border-velmora-ink'
                      : 'border-velmora-border'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-10">
            <p className="text-xs uppercase tracking-widest text-velmora-accent mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-ink">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>
            <p className="mt-5 font-serif text-2xl md:text-3xl text-velmora-ink">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-6 text-velmora-taupe leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-velmora-ink mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-6 py-2 text-xs uppercase tracking-widest border transition-colors ${
                      tone === t
                        ? 'border-velmora-ink bg-velmora-ink text-white'
                        : 'border-velmora-border text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-velmora-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-10">
              <Button className="w-full py-4" onClick={handleAdd}>
                {added ? (
                  <>
                    <Check className="w-4 h-4 mr-2" /> Added to Bag
                  </>
                ) : (
                  'Add to Bag'
                )}
              </Button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-velmora-border bg-velmora-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-ink text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
