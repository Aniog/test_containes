import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedVariant(0);
    setQuantity(1);
    setOpenAccordion('description');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-heading-2 text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, product.variants[selectedVariant]);
    }
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.fullDescription,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\n${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `${product.shipping}\n\n${product.returns}`,
    },
  ];

  return (
    <main className="pt-20 lg:pt-24">
      <div className="max-w-site mx-auto section-padding py-8 lg:py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 lg:mb-12">
          <ol className="flex items-center gap-2 font-sans text-xs text-charcoal/40">
            <li><Link to="/" className="hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal/70">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-ivory-warm overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square bg-ivory-warm overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-gold-500' : 'border-transparent hover:border-ivory-dark'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.08em] uppercase text-charcoal mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#d4a84e' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold-400' : 'text-charcoal/20'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal/50 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-gold-600 mb-5">
              ${product.price.toFixed(2)}
            </p>

            <p className="font-sans text-body text-charcoal/60 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block font-sans text-xs uppercase tracking-[0.1em] text-charcoal/50 mb-3">
                Tone: {product.variants[selectedVariant]}
              </label>
              <div className="flex gap-2">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.1em] border transition-all ${
                      selectedVariant === i
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-ivory-dark text-charcoal/60 hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-sans text-xs uppercase tracking-[0.1em] text-charcoal/50 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-ivory-dark">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-center text-xs text-charcoal/40 font-sans mb-8">
              Free shipping worldwide · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-t border-ivory-dark">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-ivory-dark">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.1em] text-charcoal/70">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-charcoal/40" />
                    ) : (
                      <ChevronDown size={16} className="text-charcoal/40" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-charcoal/50 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-16 border-t border-ivory-dark">
            <div className="text-center mb-10">
              <h2 className="font-serif text-heading-3 text-charcoal mb-2">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
