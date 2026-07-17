import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#2a2a2a]">
      <button
        className="w-full flex items-center justify-between py-4 text-sm text-[#f5f0eb] hover:text-gold transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="uppercase tracking-[0.08em]">{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-[#a09890] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-28 pb-16 text-center">
        <p className="text-[#a09890]">Product not found</p>
        <Link to="/shop" className="btn-outline mt-4 inline-block text-xs">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-[#a09890] hover:text-gold transition-colors mb-6 md:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#141414] rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] uppercase tracking-[0.08em] mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-[#2a2a2a]'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#a09890]">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-gold font-medium mb-6">${product.price}</p>

            <p className="text-sm text-[#a09890] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.08em] text-[#a09890] mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-[#2a2a2a] text-[#a09890] hover:border-[#4a4a4a]'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-[#2a2a2a] rounded">
                <button
                  className="px-3 py-2.5 text-[#a09890] hover:text-[#f5f0eb] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2.5 text-sm text-[#f5f0eb] min-w-[3ch] text-center">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2.5 text-[#a09890] hover:text-[#f5f0eb] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-primary py-3 ${added ? 'bg-gold-light' : ''}`}
              >
                {added ? 'Added to Cart!' : 'Add to Cart'}
                <ShoppingBag className="w-4 h-4 ml-2 inline" />
              </button>
            </div>

            {/* Accordions */}
            <Accordion title="Description">
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              {product.shipping} {product.returns}
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-[#2a2a2a]">
            <h2 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                  <div className="aspect-[3/4] bg-[#141414] rounded overflow-hidden mb-3">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-[0.08em] text-[#f5f0eb] uppercase">
                    {rp.name}
                  </h3>
                  <p className="text-gold text-sm mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}