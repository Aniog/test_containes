import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { products, getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-warm-border">
      <button
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-[0.1em] font-medium text-warm-black hover:text-gold transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warm-gray leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl">Product not found</h2>
        <Link to="/shop" className="btn-outline mt-6 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-warm-gray mb-8 font-sans">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-black">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-warm-light rounded overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-warm-black">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-light'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif font-semibold text-warm-black mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-warm-gray leading-relaxed mt-4 font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <label className="text-xs uppercase tracking-[0.1em] text-warm-gray font-sans">
                Finish
              </label>
              <div className="flex gap-2 mt-2">
                {['Gold Tone', 'Silver Tone'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] font-medium rounded border transition-all ${
                      variant === v
                        ? 'bg-warm-black text-white border-warm-black'
                        : 'bg-transparent text-warm-gray border-warm-border hover:border-warm-gray'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.1em] text-warm-gray font-sans">
                Quantity
              </label>
              <div className="flex items-center border border-warm-border rounded w-fit mt-2">
                <button
                  className="px-4 py-2.5 hover:bg-warm-light transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-5 py-2.5 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2.5 hover:bg-warm-light transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                addedToCart
                  ? 'bg-warm-black text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              {addedToCart ? 'Added to Bag!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong>Material:</strong> {product.material}</p>
                  <p className="mt-2">To maintain the brilliance of your Velmora piece, avoid contact with perfumes, lotions, and water. Store in the provided pouch. Clean gently with a soft, dry cloth.</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p>Free worldwide shipping on all orders. Orders are processed within 1-2 business days.</p>
                  <p className="mt-2">30-day return policy for items in original condition. Please contact our support team to initiate a return.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="hairline mb-10" />
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}