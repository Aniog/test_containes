import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import StarRating from '@/components/product/StarRating';
import ProductCard from '@/components/shop/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const { addItem } = useCart();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .limit(1);
        if (error) throw error;
        const list = response?.data?.list ?? [];
        const p = list[0];
        if (!mounted) return;
        if (p) {
          const d = p.data || p;
          setProduct(d);
          // Fetch related products
          const { data: relResponse } = await client
            .from('Products')
            .select('*')
            .eq('category', d.category)
            .neq('slug', slug)
            .limit(4);
          if (mounted) {
            const relList = relResponse?.data?.list ?? [];
            setRelated(relList.map(item => item.data || item));
          }
        }
      } catch (err) {
        console.error('Product fetch error:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchData();
    return () => { mounted = false; };
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, quantity, variant);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-content mx-auto px-4 animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="aspect-square bg-border-light" />
            <div className="space-y-4">
              <div className="h-6 bg-border-light w-1/2" />
              <div className="h-4 bg-border-light w-1/4" />
              <div className="h-24 bg-border-light" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-cream pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent-gold hover:underline">Browse all jewelry</Link>
        </div>
      </div>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image_url].filter(Boolean);

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={gallery} productName={product.name} />

          {/* Details */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-text-primary mb-3">
              {product.name}
            </h1>
            <p className="font-sans text-lg mb-4">${product.price}</p>
            {product.rating && (
              <div className="mb-6">
                <StarRating rating={product.rating} count={product.review_count} size={4} />
              </div>
            )}
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              {product.short_description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-text-secondary mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 border text-xs uppercase tracking-widest transition-colors ${
                      variant === v
                        ? 'border-accent-gold bg-accent-gold/10 text-text-primary'
                        : 'border-border-light text-text-secondary hover:border-text-secondary'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-text-secondary mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border-light flex items-center justify-center hover:border-accent-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border-light flex items-center justify-center hover:border-accent-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent-gold text-deep font-sans text-xs uppercase tracking-widest py-4 hover:bg-accent-gold-hover transition-colors mb-4"
            >
              Add to Cart
            </button>
            <p className="text-xs text-text-secondary text-center">
              Free shipping on orders over $50
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-light">
              {ACCORDIONS.map(({ key, label }) => (
                <div key={key} className="border-b border-border-light">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-widest text-text-primary hover:text-accent-gold transition-colors"
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openAccordion === key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === key && (
                    <div className="pb-4 text-sm text-text-secondary leading-relaxed">
                      {key === 'description' && (product.description || product.short_description)}
                      {key === 'materials' && (
                        <>
                          <p className="mb-2"><strong className="text-text-primary">Materials:</strong> 18k gold-plated brass, hypoallergenic and nickel-free.</p>
                          <p><strong className="text-text-primary">Care:</strong> Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.</p>
                        </>
                      )}
                      {key === 'shipping' && (
                        <>
                          <p className="mb-2"><strong className="text-text-primary">Shipping:</strong> Free worldwide shipping on orders over $50. Standard delivery 5-10 business days.</p>
                          <p><strong className="text-text-primary">Returns:</strong> 30-day hassle-free returns. Items must be unworn with original packaging.</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-border-light bg-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-text-primary text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
