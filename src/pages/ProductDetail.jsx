import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, formatPrice, getRelatedProducts } from '@/lib/data';
import { useCart } from '@/context/cart-context';
import ProductGallery from '@/components/product/ProductGallery';
import Accordion from '@/components/product/Accordion';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/shop/ProductCard';

const tones = ['gold', 'silver'];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center">
        <h1 className="font-serif text-3xl text-espresso">Product not found</h1>
        <button
          onClick={() => navigate('/shop')}
          className="mt-6 text-sm uppercase tracking-widest text-gold underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Standard delivery arrives in 5-10 business days. Express options available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.',
    },
  ];

  const handleAdd = () => {
    addToCart(product, { quantity, tone });
  };

  return (
    <div className="bg-cream">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-xs text-warmstone">({product.reviewCount} reviews)</span>
            </div>

            <h1 className="font-serif text-3xl uppercase tracking-widest text-espresso md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 font-serif text-2xl text-gold">{formatPrice(product.price)}</p>

            <p className="mt-6 text-base leading-relaxed text-warmstone">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-espresso">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-widest transition-all ${
                      tone === t
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-stoneborder bg-white text-warmstone hover:border-espresso'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-espresso">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center rounded-full border border-stoneborder bg-white px-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-warmstone hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[2rem] text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-warmstone hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <button
                onClick={handleAdd}
                className="flex flex-1 items-center justify-center gap-3 rounded-sm bg-gold py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-gold-dark"
              >
                <ShoppingBag size={18} strokeWidth={2} />
                Add to Cart
              </button>
              <button
                aria-label="Add to wishlist"
                className="rounded-sm border border-stoneborder bg-white px-5 text-warmstone transition-colors hover:border-gold hover:text-gold"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stoneborder pt-8">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: ShieldCheck, label: '1-Year Warranty' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <Icon size={20} strokeWidth={1.5} className="text-gold" />
                  <span className="text-[10px] font-medium uppercase tracking-wide text-warmstone">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-stoneborder bg-parchment py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-3xl text-espresso">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}