import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { fetchProductBySlug, fetchProducts } from '../api/products.js';
import { useCart } from '../context/CartContext.jsx';
import StarRating from '../components/StarRating.jsx';
import ProductCard from '../components/ProductCard.jsx';

const PRODUCT_IMAGES = {
  'vivid-aura-jewels': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  'majestic-flora-nectar': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  'golden-sphere-huggies': 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  'amber-lace-earrings': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
  'royal-heirloom-set': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
};

const variants = [
  { name: 'Gold', price_adjustment: 0 },
  { name: 'Silver', price_adjustment: 0 },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading');
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setStatus('loading');
    setQuantity(1);
    setSelectedVariant(variants[0]);
    fetchProductBySlug(slug)
      .then((p) => {
        if (!p) {
          setStatus('notfound');
          return;
        }
        setProduct(p);
        setStatus('ready');
        // Fetch related products
        fetchProducts({ limit: 4 }).then((all) => {
          const others = all.filter((x) => x.id !== p.id).slice(0, 4);
          setRelated(others);
        });
      })
      .catch(() => setStatus('error'));
  }, [slug]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status === 'notfound' || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  const data = product.data || product;
  const price = data.price + (selectedVariant.price_adjustment || 0);
  const rating = data.rating || 4.5;
  const reviewCount = data.review_count || 12;
  const imageUrl = PRODUCT_IMAGES[slug] || PRODUCT_IMAGES['vivid-aura-jewels'];

  const handleAddToCart = () => {
    addItem(
      {
        id: data.id,
        name: data.name,
        price: data.price,
        image_url: data.image_url || '',
      },
      selectedVariant,
      quantity
    );
  };

  const accordions = [
    {
      title: 'Description',
      content: data.description || 'A beautifully crafted piece designed to elevate your everyday look.',
    },
    {
      title: 'Materials & Care',
      content:
        '18K gold plated over brass. Hypoallergenic, nickel-free, and lead-free. To maintain shine, store in a dry place and avoid contact with perfumes, lotions, and water.',
    },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Delivered within 5-10 business days. 30-day hassle-free returns on unworn items in original packaging.',
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="section-padding py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-border relative overflow-hidden">
              <img
                src={imageUrl}
                alt={data.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-border hover:bg-gold/10 transition-colors border border-transparent hover:border-gold/30 overflow-hidden"
                  aria-label={`Thumbnail ${i}`}
                >
                  <img
                    src={imageUrl}
                    alt={`${data.name} view ${i}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
                {data.name}
              </h1>
              <button
                onClick={() => setWishlist(!wishlist)}
                className="text-stone hover:text-gold transition-colors mt-1"
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${wishlist ? 'fill-gold text-gold' : ''}`}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            <div className="mb-4">
              <StarRating rating={rating} count={reviewCount} />
            </div>

            <p className="font-sans text-xl md:text-2xl text-charcoal mb-6">
              ${price.toFixed(2)}
            </p>

            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 border font-sans text-xs tracking-widest uppercase transition-all ${
                      selectedVariant.name === v.name
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-border text-stone hover:border-charcoal'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-border transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="px-4 font-sans text-sm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-border transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart — ${(price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-stone-light text-center">
              Free shipping on orders over $50. 30-day returns.
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-20 border-t border-border">
          {accordions.map((acc) => (
            <div key={acc.title} className="border-b border-border">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === acc.title ? null : acc.title)
                }
                className="w-full flex items-center justify-between py-5 group"
              >
                <span className="font-sans text-sm tracking-widest uppercase text-charcoal">
                  {acc.title}
                </span>
                {openAccordion === acc.title ? (
                  <ChevronUp className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" strokeWidth={1.5} />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone group-hover:text-charcoal transition-colors" strokeWidth={1.5} />
                )}
              </button>
              {openAccordion === acc.title && (
                <div className="pb-5 max-w-2xl">
                  <p className="font-sans text-sm text-stone leading-relaxed">
                    {acc.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-padding py-12 md:py-20 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
