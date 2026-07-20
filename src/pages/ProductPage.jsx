import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-deep-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-wider uppercase text-deep-700">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-deep-400" /> : <ChevronDown className="w-4 h-4 text-deep-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="font-sans text-sm text-deep-500 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-deep-500">Product not found.</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs text-deep-400 tracking-wider uppercase mb-8">
          <Link to="/" className="hover:text-deep-700 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-deep-700 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-deep-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-deep-100 overflow-hidden mb-4">
              <div className={`w-full h-full bg-gradient-to-br ${
                selectedImage === 0 ? 'from-warm-200 to-warm-300' :
                selectedImage === 1 ? 'from-warm-300 to-warm-400' :
                'from-warm-200 to-warm-400'
              }`} />
            </div>
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-deep-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-deep-800' : 'border-transparent'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${
                    i === 0 ? 'from-warm-200 to-warm-300' :
                    i === 1 ? 'from-warm-300 to-warm-400' :
                    'from-warm-200 to-warm-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.badge && (
              <span className="inline-block bg-deep-800 text-cream font-sans text-[10px] tracking-wider uppercase px-2 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-deep-800">
              {product.name}
            </h1>
            <p className="font-sans text-2xl font-medium text-deep-700 mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
              <span className="font-sans text-sm text-deep-400 ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-sm text-deep-500 leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-7">
              <p className="font-sans text-xs tracking-wider uppercase text-deep-500 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase transition-all border ${
                      selectedVariant === i
                        ? 'border-deep-800 bg-deep-800 text-cream'
                        : 'border-deep-200 text-deep-600 hover:border-deep-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="font-sans text-xs tracking-wider uppercase text-deep-500 mb-3">Quantity</p>
              <div className="flex items-center border border-deep-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-deep-500 hover:text-deep-800 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-deep-700">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-deep-500 hover:text-deep-800 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="btn-primary w-full mt-7 text-sm"
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <strong className="text-deep-700">Materials:</strong> {product.materials}<br /><br />
                <strong className="text-deep-700">Care:</strong> {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="hairline-divider mt-20 pt-16">
          <div className="text-center mb-10">
            <p className="section-subtitle">Complete Your Look</p>
            <h2 className="section-title mt-3">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}