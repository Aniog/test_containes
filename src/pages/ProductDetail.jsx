import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { dispatch } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-mocha/60">Product not found.</p>
        <Link to="/shop" className="text-xs tracking-widest uppercase underline mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: selectedVariant,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Breadcrumb */}
        <div className="py-6">
          <Link to="/shop" className="inline-flex items-center gap-1 text-xs tracking-wider text-mocha/50 hover:text-espresso transition-colors">
            <ChevronLeft className="w-3 h-3" />
            Back to Shop
          </Link>
        </div>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-16">
          {/* Gallery */}
          <div className="animate-fade-in">
            <ProductGallery product={product} selectedVariant={selectedVariant} />
          </div>

          {/* Details */}
          <div className="animate-fade-in animate-delay-200">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-3">
              {product.category}
            </p>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-espresso mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-xl text-espresso font-medium mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand/40 fill-sand/40'
                  }`}
                />
              ))}
              <span className="text-xs text-mocha/50 ml-2">{product.rating} ({product.ratingCount} reviews)</span>
            </div>

            {/* Short description */}
            <p id={product.descId} className="text-sm text-mocha/70 leading-relaxed mb-8">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-widest uppercase text-espresso mb-3 font-medium">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm font-sans transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-espresso text-cream'
                        : 'border border-sand/60 text-mocha hover:border-espresso'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-espresso mb-3 font-medium">
                Quantity
              </p>
              <div className="flex items-center border border-sand/60 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-warm transition-colors text-sm"
                >
                  -
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-warm transition-colors text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 mb-3 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-espresso text-cream hover:bg-espresso/85'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              {['Free Shipping', '30-Day Returns', '2-Year Warranty'].map((badge) => (
                <span key={badge} className="text-[10px] tracking-widest uppercase text-mocha/40">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-2xl pb-20">
          <ProductAccordion product={product} />
        </div>

        {/* Related products */}
        <div className="border-t border-sand/40 pt-20 pb-24">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-espresso">You May Also Like</h3>
            <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
