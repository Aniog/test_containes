import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium tracking-[0.12em] uppercase">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-sm text-muted leading-relaxed animate-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setStatus('loading');
    setQuantity(1);
    setSelectedImage(0);

    fetchProductBySlug(slug)
      .then((data) => {
        if (!data) {
          setStatus('notfound');
          return;
        }
        const p = data.data || data;
        setProduct(p);
        setSelectedVariant(p.variants?.[0] || 'Gold');
        setStatus('ready');

        fetchProducts().then((rows) => {
          const all = rows.map((r) => r.data || r);
          setRelated(all.filter((x) => x.id !== p.id).slice(0, 4));
        });
      })
      .catch(() => setStatus('error'));
  }, [slug]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background pt-24 md:pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="aspect-[3/4] bg-surface-muted animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 bg-surface-muted w-2/3 animate-pulse" />
              <div className="h-6 bg-surface-muted w-1/3 animate-pulse" />
              <div className="h-4 bg-surface-muted w-full animate-pulse" />
              <div className="h-4 bg-surface-muted w-5/6 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'notfound') {
    return (
      <div className="min-h-screen bg-background pt-24 md:pt-28 pb-16 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-accent text-sm tracking-wide border-b border-accent pb-1">Back to Shop</Link>
      </div>
    );
  }

  const images = [product.image_url, product.image_hover_url || product.image_url].filter(Boolean);

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-28 pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="aspect-[3/4] bg-surface-muted overflow-hidden mb-3">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="py-2 md:py-6">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em] uppercase mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating || 0) ? 'fill-star text-star' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">{product.rating} ({product.review_count} reviews)</span>
            </div>

            <p className="text-2xl font-light mb-6">${product.price.toFixed(2)}</p>

            <p className="text-sm text-muted leading-relaxed mb-8">{product.description}</p>

            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs font-medium tracking-[0.12em] uppercase mb-2">Color</p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs tracking-wide border transition-colors ${selectedVariant === v ? 'bg-accent text-white border-accent' : 'border-border hover:border-foreground'}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="text-xs font-medium tracking-[0.12em] uppercase mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, selectedVariant || product.variants?.[0] || 'Gold', quantity)}
              className="w-full bg-accent text-white py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted text-center">Free shipping on orders over $50. 30-day returns.</p>

            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.long_description || product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials_care || '18K gold-plated. Avoid water, perfume, and lotions. Store in provided pouch.'}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping_returns || 'Free worldwide shipping on orders over $50. 30-day hassle-free returns.'}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3/4] bg-surface-muted overflow-hidden mb-3">
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-product uppercase text-center">{p.name}</h3>
                  <p className="text-sm text-center mt-1">${p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
