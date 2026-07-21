import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-pearl-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm text-midnight-800 hover:text-midnight-950 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-medium">{title}</span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-pearl-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl text-midnight-900">Product not found</h2>
        <Link to="/shop" className="btn-primary mt-6 inline-block">
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
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-pearl-500 mb-8 font-sans">
          <Link to="/" className="hover:text-midnight-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-midnight-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-midnight-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-pearl-100 rounded-sm overflow-hidden">
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
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-midnight-900'
                      : 'border-transparent hover:border-pearl-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="product-name text-xl md:text-2xl">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-500 text-brand-500'
                        : 'text-pearl-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-pearl-600 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-midnight-900 mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-pearl-700 mt-4 leading-relaxed font-sans">
              {product.description}
            </p>

            <div className="hairline my-6" />

            {/* Variant Selector */}
            <div>
              <label className="text-xs tracking-widest uppercase text-midnight-700 font-sans">
                Finish: <span className="text-midnight-900 font-medium">{selectedVariant === 'gold' ? '18K Gold' : 'Sterling Silver'}</span>
              </label>
              <div className="flex gap-3 mt-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans rounded-sm border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-midnight-900 bg-midnight-900 text-cream-50'
                        : 'border-pearl-300 text-midnight-800 hover:border-midnight-400'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-widest uppercase text-midnight-700 font-sans">
                Quantity
              </label>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-pearl-300 rounded-sm hover:bg-pearl-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-pearl-300 rounded-sm hover:bg-pearl-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 flex items-center justify-center gap-2 ${
                added ? 'bg-green-700 hover:bg-green-800' : ''
              }`}
            >
              {added ? 'Added to Cart!' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2 list-disc list-inside">
                  <li>18K gold plating over sterling silver</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in a dry, cool place</li>
                  <li>Gently clean with a soft cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>30-day return window for unworn items</li>
                  <li>Free returns within the US</li>
                  <li>Orders ship within 1-2 business days</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-midnight-900 tracking-wide">
                You May Also Like
              </h2>
              <div className="w-12 h-0.5 bg-brand-500/40 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[4/5] bg-pearl-100 rounded-sm overflow-hidden">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="product-name text-xs md:text-sm">{rp.name}</h3>
                    <p className="text-sm font-medium text-midnight-900 mt-1">
                      ${rp.price}
                    </p>
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