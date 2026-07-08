import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { ChevronDown, Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchProductBySlug(slug),
      fetchProducts(),
    ])
      .then(([p, all]) => {
        const data = p?.data || p;
        setProduct(data);
        setAllProducts(all.map((x) => x.data || x));
        setVariant('Gold');
        setQuantity(1);
        setOpenAccordion(null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen flex items-center justify-center">
        <p className="text-sm text-taupe uppercase tracking-widest">Loading...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen flex flex-col items-center justify-center">
        <p className="font-serif text-2xl text-taupe mb-4">Product not found</p>
        <Link
          to="/shop"
          className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const related = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordions = [
    {
      key: 'desc',
      title: 'Description',
      content: product.description || 'No description available.',
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: product.materials || '18K gold-plated jewelry. Handle with care.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        product.shipping_info ||
        'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. 30-day hassle-free returns.',
    },
  ];

  return (
    <main className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-warmgray mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-parchment rounded overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gold/15 flex items-center justify-center border border-gold/25">
                  <span className="font-serif text-5xl text-gold/50">V</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-parchment rounded overflow-hidden relative hover:ring-2 hover:ring-gold transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/20" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal uppercase tracking-[0.15em] mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl text-charcoal">
                  ${product.price.toFixed(2)}
                </span>
                <StarRating
                  rating={product.rating || 4.5}
                  size={14}
                  count={product.review_count}
                />
              </div>
            </div>

            <p className="text-taupe text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-3">
                Metal
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium border transition-all ${
                      variant === v
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-stone hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 hover:bg-stone transition-colors"
                >
                  <Minus className="w-4 h-4 text-charcoal" />
                </button>
                <span className="px-6 text-sm font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 hover:bg-stone transition-colors"
                >
                  <Plus className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() =>
                addItem(
                  { id: product.id, name: product.name, price: product.price, image_url: '' },
                  quantity,
                  variant
                )
              }
              className="w-full py-4 bg-charcoal text-cream text-sm uppercase tracking-[0.2em] font-semibold hover:bg-espresso transition-colors flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust icons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <div className="flex items-center gap-2 text-xs text-warmgray">
                <Truck className="w-4 h-4" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-warmgray">
                <RotateCcw className="w-4 h-4" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-warmgray">
                <Shield className="w-4 h-4" />
                2-Year Warranty
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-stone pt-6 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-stone">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-[0.15em] text-charcoal font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-warmgray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <h2 className="font-serif text-3xl text-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <div key={p.id} className="group">
                  <Link
                    to={`/product/${p.slug}`}
                    className="block relative aspect-[3/4] bg-parchment rounded overflow-hidden mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="font-serif text-xl text-gold/60">V</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
                  </Link>
                  <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-charcoal truncate">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-taupe mt-1">
                    ${p.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
