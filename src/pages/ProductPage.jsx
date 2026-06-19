import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const accordionData = [
  {
    title: 'Description',
    content:
      'Each Velmora piece is designed in-house and hand-finished by skilled artisans. We use 18K gold plating over hypoallergenic brass, ensuring lasting brilliance and comfort for all-day wear.',
  },
  {
    title: 'Materials & Care',
    content:
      'Materials: 18K gold plated over hypoallergenic brass. Crystals and cubic zirconia accents. Avoid contact with water, perfumes, lotions, and harsh chemicals. Store in a dry place, ideally in the included pouch. Gently clean with a soft dry cloth.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on all orders. Expect 3–7 business days for domestic, 7–14 for international. 30-day return window for unworn items in original packaging. Full refund to original payment method.',
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const relatedProducts = useMemo(
    () => products.filter((p) => p.id !== id).slice(0, 4),
    [id]
  );

  if (!product) {
    return (
      <main className="pt-24 pb-16 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 text-center py-20">
          <h1 className="text-2xl font-serif text-charcoal">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-dark text-sm underline underline-offset-2">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 md:py-6">
          <ol className="flex items-center gap-2 text-xs text-charcoal-muted">
            <li><Link to="/" className="hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal-light">{product.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* LEFT: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-beige-light">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-beige'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product info */}
          <div className="flex flex-col">
            <div className="sticky top-28">
              {/* Badge */}
              {product.badge && (
                <span className="inline-block bg-charcoal text-white text-[10px] px-3 py-1 tracking-widest uppercase mb-4">
                  {product.badge}
                </span>
              )}

              {/* Title & price */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal tracking-widest uppercase">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-light fill-gold-light' : 'text-beige'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-charcoal-muted">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <p className="font-serif italic text-xl md:text-2xl text-charcoal mt-4">${product.price}</p>

              {/* Description */}
              <p className="text-sm text-charcoal-light leading-relaxed mt-6 border-t border-beige pt-6">
                {product.description}
              </p>

              {/* Color variant */}
              <div className="mt-6">
                <h4 className="text-xs tracking-widest uppercase text-charcoal font-medium mb-3">
                  Color: <span className="text-gold">{selectedColor}</span>
                </h4>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2.5 text-xs tracking-wider uppercase font-medium border transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-beige text-charcoal-light hover:border-charcoal-light'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-widest uppercase text-charcoal font-medium">Qty</span>
                  <div className="flex items-center border border-beige">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 text-charcoal-light hover:text-charcoal transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center text-sm font-medium text-charcoal">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2.5 text-charcoal-light hover:text-charcoal transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => addItem(product, quantity, selectedColor)}
                    className="flex-1 py-3.5 bg-gold hover:bg-gold-dark text-white text-sm tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Bag
                  </button>
                  <button className="w-12 h-12 border border-beige flex items-center justify-center text-charcoal-light hover:text-charcoal hover:border-charcoal-light transition-all duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-10 border-t border-beige">
                {accordionData.map((item) => (
                  <div key={item.title} className="border-b border-beige">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs tracking-widest uppercase text-charcoal font-medium">
                        {item.title}
                      </span>
                      {openAccordion === item.title ? (
                        <ChevronUp className="w-4 h-4 text-charcoal-light" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-charcoal-light" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.title ? 'max-h-48 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-sm text-charcoal-light leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-beige">
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-8 md:mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-beige-light">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xs md:text-sm tracking-widest uppercase text-charcoal font-medium group-hover:text-gold transition-colors line-clamp-1">
                      {rp.name}
                    </h3>
                    <p className="font-serif italic text-sm text-charcoal mt-1">${rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}