import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-warm-gray text-sm">Product not found.</p>
        <Link to="/shop" className="text-gold text-xs tracking-widest uppercase mt-4 inline-block underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="pt-24 lg:pt-28 pb-20 lg:pb-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-warm-gray mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-[10px] tracking-ultra uppercase text-gold mb-2">Velmora Fine Jewelry</p>
            <h1 className="font-serif text-2xl lg:text-3xl text-charcoal tracking-widest leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl text-charcoal">${product.price}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-sand text-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-warm-gray">({product.reviews})</span>
              </div>
            </div>

            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-[10px] tracking-widest uppercase text-charcoal/70 mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-6 py-2.5 text-xs tracking-widest uppercase font-medium rounded-sm border transition-all ${
                        variant === v
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'bg-transparent text-charcoal border-sand hover:border-charcoal'
                      }`}
                    >
                      {v} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase text-charcoal/70 mb-3">Quantity</p>
              <div className="flex items-center border border-sand rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 rounded-sm ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-gold hover:bg-gold-dark text-cream'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Wishlist */}
            <button className="flex items-center justify-center gap-2 mt-4 text-[10px] tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors">
              <Heart className="w-3.5 h-3.5" />
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion
                description={product.description}
                materials={product.materials}
              />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-3">Complete the Look</p>
              <h2 className="font-serif text-2xl lg:text-3xl text-charcoal">You May Also Like</h2>
              <div className="w-12 h-px bg-gold mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-sand-light rounded-sm overflow-hidden mb-3">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[11px] tracking-widest font-medium text-charcoal leading-tight mb-1">
                    {rp.name}
                  </p>
                  <p className="text-sm text-charcoal">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
