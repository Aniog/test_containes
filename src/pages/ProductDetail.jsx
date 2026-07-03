import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products, getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || 'Gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="font-serif text-2xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold-600 underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs tracking-wide-lg uppercase font-sans text-warm-500">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-warm-200 rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? 'border-gold-400'
                        : 'border-transparent hover:border-warm-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide-lg uppercase text-ink">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-warm-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-500 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-ink">${product.price}</p>

            <p className="mt-4 text-sm text-warm-600 leading-relaxed font-sans max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <h3 className="text-xs tracking-wide-xl uppercase font-sans text-warm-500 mb-3">
                  Finish: <span className="text-ink">{selectedVariant}</span>
                </h3>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs tracking-wide-lg uppercase font-sans rounded-full border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'bg-ink text-white border-ink'
                          : 'bg-transparent text-ink border-warm-300 hover:border-ink'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-wide-xl uppercase font-sans text-warm-500">
                  Quantity
                </span>
                <div className="flex items-center border border-warm-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:text-gold-600 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-medium min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:text-gold-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3.5 text-sm tracking-wide-xl uppercase font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-700 text-white'
                    : 'bg-gold-400 text-ink hover:bg-gold-500'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm-200">
              {[
                {
                  key: 'description',
                  label: 'Description',
                  content: product.description,
                },
                {
                  key: 'materials',
                  label: 'Materials & Care',
                  content:
                    'Crafted in 18K gold-plated brass. Hypoallergenic and nickel-free. To preserve the brilliance of your piece, avoid contact with perfumes, lotions, and water. Gently wipe with a soft cloth after wearing.',
                },
                {
                  key: 'shipping',
                  label: 'Shipping & Returns',
                  content:
                    'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day return window for unworn items in original packaging. For full details, visit our Shipping & Returns page.',
                },
              ].map((accordion) => (
                <div key={accordion.key} className="border-b border-warm-200">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === accordion.key ? null : accordion.key
                      )
                    }
                    className="w-full flex items-center justify-between py-4 text-sm tracking-wide-lg uppercase font-sans text-ink hover:text-gold-600 transition-colors"
                  >
                    {accordion.label}
                    {openAccordion === accordion.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === accordion.key
                        ? 'max-h-40 pb-4'
                        : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-warm-600 leading-relaxed font-sans">
                      {accordion.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-20 pt-12 border-t border-warm-200">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-square bg-warm-200 rounded-sm overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[11px] md:text-xs tracking-wide-lg uppercase font-sans font-medium text-ink">
                      {p.name}
                    </h3>
                    <p className="text-sm font-medium text-ink mt-1">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}