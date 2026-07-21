import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';
import { fetchProductBySlug, fetchRelatedProducts } from '@/api/products';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-wide text-velmora-dark">{title}</span>
        <ChevronDown size={16} className={`text-velmora-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-velmora-muted leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');

  useEffect(() => {
    let mounted = true;
    setStatus('loading');
    setSelectedImage(0);
    setQuantity(1);
    fetchProductBySlug(slug)
      .then((data) => {
        if (!mounted) return;
        if (!data) { setStatus('notfound'); return; }
        setProduct(data);
        setSelectedTone(data.data?.tone || data.tone || 'Gold');
        setStatus('ready');
        fetchRelatedProducts(data.data?.category || data.category, slug, 4)
          .then((rel) => { if (mounted) setRelated(rel); })
          .catch(() => {});
      })
      .catch(() => { if (mounted) setStatus('error'); });
    return () => { mounted = false; };
  }, [slug]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="aspect-square bg-velmora-bg animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 w-2/3 bg-velmora-bg animate-pulse" />
              <div className="h-6 w-1/3 bg-velmora-bg animate-pulse" />
              <div className="h-4 w-full bg-velmora-bg animate-pulse" />
              <div className="h-4 w-5/6 bg-velmora-bg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'notfound') {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-dark">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm font-medium tracking-widest uppercase text-velmora-accent underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const fields = product.data || product;
  const gallery = fields.gallery?.length ? fields.gallery : [fields.image_url];
  const tones = ['Gold', 'Silver'];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="aspect-square overflow-hidden bg-velmora-bg">
              <img
                src={gallery[selectedImage]}
                alt={fields.name}
                className="h-full w-full object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`h-20 w-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-velmora-dark' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:py-6">
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={fields.rating || 0} size={14} />
              <span className="text-xs text-velmora-muted">({fields.review_count || 0} reviews)</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-velmora-dark">
              {fields.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-velmora-dark">${fields.price.toFixed(2)}</p>
            {fields.original_price && (
              <p className="text-sm text-velmora-muted line-through">${fields.original_price.toFixed(2)}</p>
            )}
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">{fields.description}</p>

            <div className="mt-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-velmora-dark">Tone</span>
              <div className="mt-2 flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-4 py-2 text-xs font-medium tracking-widest uppercase border transition-colors ${
                      selectedTone === tone
                        ? 'border-velmora-dark bg-velmora-dark text-white'
                        : 'border-velmora-border text-velmora-dark hover:border-velmora-dark'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-velmora-dark">Quantity</span>
              <div className="mt-2 inline-flex items-center border border-velmora-border">
                <button
                  className="px-3 py-2 text-velmora-dark hover:bg-velmora-bg"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium text-velmora-dark">{quantity}</span>
                <button
                  className="px-3 py-2 text-velmora-dark hover:bg-velmora-bg"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                addItem(
                  { id: product.id, name: fields.name, slug: fields.slug, price: fields.price, image_url: fields.image_url },
                  { key: selectedTone.toLowerCase(), label: selectedTone },
                  quantity
                )
              }
              className="mt-8 w-full bg-velmora-dark py-4 text-sm font-medium tracking-widest uppercase text-white hover:bg-velmora-accent transition-colors"
            >
              Add to Cart — ${(fields.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8">
              <Accordion title="Description">
                {fields.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {fields.details || '18K gold plated. Nickel-free and hypoallergenic. Avoid contact with perfumes and lotions. Store in a dry pouch.'}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {fields.shipping_info || 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. 30-day hassle-free returns.'}
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-velmora-border pt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
