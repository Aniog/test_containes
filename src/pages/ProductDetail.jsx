import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';
import Accordion from '@/components/product/Accordion';
import { Minus, Plus, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="font-sans text-sm text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const currentVariant = selectedVariant || product.variants[0];

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available at checkout.\n\nWe offer free 30-day returns on all unworn items in original packaging.' },
  ];

  return (
    <div className="pt-20 lg:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 border transition-colors ${
                    selectedImage === i ? 'border-velmora-charcoal' : 'border-velmora-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square bg-velmora-creamDark overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="self-start bg-velmora-gold text-white text-[9px] font-sans font-medium tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-velmora-warmGray mb-4">
              {product.tagline}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} size={14} />
              <span className="font-sans text-xs text-velmora-warmGrayLight">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="font-sans text-xl font-medium text-velmora-charcoal mb-8">
              ${product.price}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-velmora-warmGray mb-3">
                  Tone: <span className="text-velmora-charcoal capitalize">{currentVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 border font-sans text-xs tracking-[0.1em] uppercase transition-colors ${
                        currentVariant === variant
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-border text-velmora-warmGray hover:border-velmora-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-velmora-warmGray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-warmGray hover:text-velmora-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-warmGray hover:text-velmora-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={() => addToCart(product, currentVariant, quantity)}
                className="flex-1 bg-velmora-charcoal text-white text-xs font-sans tracking-[0.15em] uppercase py-4 hover:bg-velmora-gold transition-colors"
              >
                Add to Cart
              </button>
              <button className="w-14 h-14 border border-velmora-border flex items-center justify-center text-velmora-warmGray hover:text-velmora-charcoal hover:border-velmora-charcoal transition-colors">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-velmora-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <h2 className="font-serif text-2xl tracking-wide text-velmora-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
