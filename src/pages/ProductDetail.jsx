import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-gold mt-4 inline-block no-underline text-sm">← Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days ($12). 30-day hassle-free returns — items must be unworn with tags attached.',
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-taupe">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-taupe">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-taupe">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-linen flex items-center justify-center">
              <span className="text-taupe/40 text-sm font-medium uppercase tracking-wider text-center px-8">
                {product.name}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-linen border border-taupe/10 flex items-center justify-center cursor-pointer hover:border-gold/40 transition-colors">
                  <span className="text-[10px] text-taupe/40">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-taupe">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mt-2 uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-taupe/30'}`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl font-medium text-charcoal mt-4">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 block mb-3">
                Tone
              </span>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedVariant === v
                        ? 'border-gold bg-gold/5 text-gold'
                        : 'border-taupe/30 bg-transparent text-charcoal/70 hover:border-charcoal/50'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-0 border border-taupe/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal/70 hover:text-charcoal bg-transparent border-none cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-taupe/30">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal/70 hover:text-charcoal bg-transparent border-none cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-gold hover:bg-gold-dark text-cream font-sans text-sm font-semibold uppercase tracking-product transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-taupe/20">
              {accordions.map((acc, idx) => (
                <div key={idx} className="border-b border-taupe/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-taupe transition-transform duration-200 ${
                        openAccordion === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === idx && (
                    <div className="pb-4 text-sm text-charcoal/70 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-taupe/20">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
