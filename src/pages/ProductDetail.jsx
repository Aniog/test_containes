import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedVariant(product.variants?.[0] || 'Gold Tone');
      setQuantity(1);
      setOpenAccordion(null);
      setAddedToCart(false);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-warm-black">Product Not Found</h1>
          <Link to="/shop" className="font-sans text-sm text-gold hover:text-gold-hover mt-4 inline-block uppercase tracking-wider">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-14 h-16 md:w-16 md:h-20 overflow-hidden border transition-all duration-200 ${
                    selectedImage === i
                      ? 'border-gold'
                      : 'border-warm-beige hover:border-warm-gray'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-warm-beige/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col md:sticky md:top-28 md:self-start">
            <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-medium">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-light text-warm-black mt-2 uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-warm-beige'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl font-medium text-warm-black mt-4">
              ${product.price.toFixed(2)}
            </p>

            <p className="font-sans text-sm text-warm-gray mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="w-full h-px bg-warm-beige my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wider text-warm-muted mb-3">
                Finish: <span className="text-warm-black font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-warm-black bg-warm-black text-white'
                        : 'border-warm-beige text-warm-gray hover:border-warm-gray'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-warm-beige">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-warm-gray hover:text-warm-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 py-3 font-sans text-sm font-medium text-warm-black min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-warm-gray hover:text-warm-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full bg-gold hover:bg-gold-hover text-white font-sans text-sm uppercase tracking-widest py-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-warm-beige">
              {[
                { key: 'description', label: 'Description', content: product.details },
                { key: 'materials', label: 'Materials & Care', content: `${product.care}\n\n${product.material}` },
                { key: 'shipping', label: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
              ].map((item) => (
                <div key={item.key} className="border-b border-warm-beige">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.key ? null : item.key)
                    }
                    className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-warm-black transition-colors"
                  >
                    {item.label}
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.key ? 'max-h-80 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-warm-gray leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 border-t border-warm-beige">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-warm-black text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-warm-beige/30">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-xs uppercase tracking-wide text-warm-black group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-warm-black mt-1">
                      ${p.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}