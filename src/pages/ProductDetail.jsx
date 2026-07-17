import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5DED5]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-sans text-sm uppercase tracking-[0.15em] text-[#1A1A1A] font-medium">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-[#6B6560]" /> : <ChevronDown className="w-4 h-4 text-[#6B6560]" />}
      </button>
      {open && <div className="pb-4"><p className="font-sans text-sm text-[#6B6560] leading-relaxed">{children}</p></div>}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.slug === slug);
  const [selectedImg, setSelectedImg] = useState(0);
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImg(0);
    setVariant('Gold');
    setQuantity(1);
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#1A1A1A] mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-[#C5A572] underline">Return to Shop</Link>
        </div>
      </main>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-20">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`flex-shrink-0 w-16 h-16 border-2 overflow-hidden transition-colors ${selectedImg === i ? 'border-[#C5A572]' : 'border-[#E5DED5] hover:border-[#C5A572]'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square overflow-hidden bg-[#F2EDE7]">
              <img src={product.images[selectedImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-[#E8DCC8] text-[#A88B5A] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-sans font-medium mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">{product.name}</h1>
            <p className="font-sans text-xl text-[#1A1A1A] mb-4">${product.price}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-[#C5A572] text-[#C5A572]' : 'text-[#E5DED5]'}`} />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-sans text-sm text-[#6B6560] leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-3 font-medium">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 text-sm font-sans border transition-all ${variant === v ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF8F5]' : 'border-[#E5DED5] text-[#6B6560] hover:border-[#1A1A1A]'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-3 font-medium">Quantity</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center border border-[#E5DED5] text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base text-[#1A1A1A] w-8 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center border border-[#E5DED5] text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full bg-[#C5A572] text-[#FAF8F5] font-sans text-sm font-medium tracking-[0.2em] uppercase py-4 hover:bg-[#A88B5A] transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <div className="mt-10">
              <Accordion title="Description">{product.details}</Accordion>
              <Accordion title="Materials & Care">{product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">You May Also Like</h2>
              <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
