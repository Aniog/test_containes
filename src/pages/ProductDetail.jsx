import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm">Product not found.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.details}\n\nCare: ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-light mb-8 tracking-wider">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-surface">
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 40%, rgba(196, 162, 101, 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`w-16 h-20 rounded-sm overflow-hidden transition-all duration-300 ${
                    i === 0 ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)'
                      : 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)',
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 50%, rgba(196, 162, 101, 0.2) 0%, transparent 70%)',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-espresso mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xl font-medium text-espresso">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-muted-light text-muted-light'}`}
                  />
                ))}
                <span className="text-xs text-muted ml-1">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed mb-8 font-sans">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs text-muted uppercase tracking-wider mb-3 font-sans">
                Finish: <span className="text-espresso font-medium">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === i
                        ? 'border-espresso bg-espresso text-cream'
                        : 'border-border text-espresso hover:border-espresso'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full inline-block"
                        style={{ backgroundColor: product.colors[i] }}
                      />
                      {variant}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs text-muted uppercase tracking-wider mb-3 font-sans">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-espresso hover:text-gold transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm w-10 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-espresso hover:text-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-wider uppercase font-medium transition-all duration-400 flex items-center justify-center gap-3 ${
                added
                  ? 'bg-gold text-cream'
                  : 'bg-espresso text-cream hover:bg-gold hover:text-espresso'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="flex items-center justify-between w-full py-4 text-sm tracking-wider uppercase font-sans text-espresso hover:text-gold transition-colors"
                    aria-expanded={openAccordion === acc.key}
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 animate-slide-in-from-top">
                      <p className="text-muted text-xs leading-relaxed whitespace-pre-line font-sans">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Complete the Look</p>
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-espresso">You May Also Like</h2>
            <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] bg-surface rounded-sm overflow-hidden mb-4">
                  <div
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)',
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 40%, rgba(196, 162, 101, 0.2) 0%, transparent 70%)',
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-espresso mb-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(p.rating) ? 'fill-gold text-gold' : 'fill-muted-light text-muted-light'}`}
                    />
                  ))}
                </div>
                <p className="font-sans text-sm font-medium">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}