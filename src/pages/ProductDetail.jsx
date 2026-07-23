import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCartDispatch } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCartDispatch();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-900">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-xs font-sans uppercase tracking-[0.15em] underline text-charcoal-700">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => product.relatedIds.includes(p.id));

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, variant: selectedVariant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Delivery within 5–10 business days. Returns accepted within 30 days of delivery in original, unworn condition. Return shipping is complimentary.' },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-charcoal-500">
            <li><Link to="/" className="hover:text-charcoal-900 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal-900 transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-warm-100">
              <div className="w-full h-full bg-warm-200" />
            </div>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 bg-warm-100 border border-warm-200 cursor-pointer">
                  <div className="w-full h-full bg-warm-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="product-name text-xl md:text-2xl">{product.name}</h1>
              <p className="text-2xl font-sans font-light text-charcoal-900 mt-3">${product.price}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-warm-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-charcoal-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm font-sans text-charcoal-600 leading-relaxed">
              {product.description}
            </p>

            <div className="hairline-divider" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div>
                <p className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal-600 mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2.5 text-xs font-sans uppercase tracking-[0.1em] border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-warm-300 text-charcoal-600 hover:border-charcoal-600'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal-600 mb-3">Quantity</p>
              <div className="flex items-center border border-warm-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-sans text-charcoal-900 min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`accent-btn w-full ${
                added ? 'bg-gold-600 hover:bg-gold-600' : ''
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            <div className="hairline-divider" />

            {/* Accordions */}
            <div className="space-y-[1px]">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-warm-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal-700">{acc.label}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm font-sans text-charcoal-600 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 pb-16 md:pb-24">
          <h2 className="section-title text-center mb-10 md:mb-14">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}