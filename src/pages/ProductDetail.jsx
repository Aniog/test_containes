import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="pt-20">
      {/* Product section */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="aspect-[4/5] overflow-hidden bg-warm-light mb-4">
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
                      className={`w-20 h-24 overflow-hidden border transition-colors ${
                        selectedImage === i ? 'border-gold' : 'border-divider hover:border-charcoal/30'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-divider'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-warm-gray font-sans">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-serif text-charcoal mb-6">${product.price}</p>

              {/* Description */}
              <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal mb-3">
                  Finish: <span className="text-gold">{variant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-6 py-3 text-xs uppercase tracking-[0.15em] font-sans border transition-all duration-300 ${
                        variant === v
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-divider text-warm-gray hover:border-charcoal/50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal mb-3">Quantity</p>
                <div className="flex items-center gap-4 border border-divider w-fit px-4 py-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-charcoal/60 hover:text-charcoal"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-charcoal/60 hover:text-charcoal"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full flex items-center justify-center gap-3 text-xs"
              >
                {added ? (
                  <span className="flex items-center gap-2">Added to Cart</span>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>

              {/* Accordions */}
              <div className="mt-12 space-y-0">
                {[
                  { key: 'description', label: 'Description', content: product.description },
                  { key: 'materials', label: 'Materials & Care', content: `${product.materialDetail}\n\nCare: ${product.care}` },
                  { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days. 30-day return policy for unworn items in original packaging.' },
                ].map((item) => (
                  <div key={item.key} className="border-t border-divider">
                    <button
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-xs uppercase tracking-[0.15em] font-sans text-charcoal">
                        {item.label}
                      </span>
                      {openAccordion === item.key ? (
                        <ChevronUp className="w-4 h-4 text-warm-gray" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-warm-gray" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.key ? 'max-h-96 pb-5' : 'max-h-0'
                      }`}
                    >
                      <p className="font-sans text-sm text-warm-gray whitespace-pre-line leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-section bg-warm-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">You May Also Like</h2>
              <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-white mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name truncate">{p.name}</h3>
                  <p className="font-sans text-sm text-charcoal mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}