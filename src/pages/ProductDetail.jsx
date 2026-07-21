import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium tracking-wide"
      >
        {title}
        <ChevronRight
          className={`w-4 h-4 text-ink-400 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      {open && <div className="pb-4 text-sm text-ink-600 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [qty, setQty] = useState(1);
  const { addItem, setDrawer } = useCart();

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-ink-500">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      image: product.images[0],
      qty,
    });
    setDrawer(true);
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-paper min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-500 mb-6">
          <Link to="/" className="hover:text-ink-800">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink-800">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-ink-100 rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-700' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-ink-400">({product.reviews} reviews)</span>
            </div>
            <p className="mt-3 text-xl font-medium">${product.price}</p>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">{product.description}</p>

            {/* Variant */}
            <div className="mt-6">
              <span className="text-xs font-medium tracking-widest uppercase text-ink-500">
                Tone
              </span>
              <div className="mt-2 flex gap-2">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-2 text-xs font-medium tracking-wide border rounded-full transition-colors ${
                      variant === v
                        ? 'border-ink-950 bg-ink-950 text-white'
                        : 'border-ink-200 text-ink-700 hover:border-ink-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-medium tracking-widest uppercase text-ink-500">
                Quantity
              </span>
              <div className="mt-2 inline-flex items-center border border-ink-200 rounded-sm">
                <button
                  className="px-3 py-2 hover:bg-ink-50 transition-colors"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{qty}</span>
                <button
                  className="px-3 py-2 hover:bg-ink-50 transition-colors"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="mt-6 w-full bg-brand-800 text-white py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-brand-900 transition-colors"
            >
              Add to Cart — ${product.price * qty}
            </button>

            {/* Trust micro-icons */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" /> Free shipping over $50
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" /> 30-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionSection title="Description">
                {product.description}
              </AccordionSection>
              <AccordionSection title="Materials & Care">
                {product.care}
              </AccordionSection>
              <AccordionSection title="Shipping & Returns">
                {product.shipping}
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide mb-6 md:mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-ink-100 overflow-hidden rounded-sm">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif text-xs tracking-[0.15em] uppercase">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
