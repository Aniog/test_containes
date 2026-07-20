import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variant || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [wishlisted, setWishlisted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variant);
      setQuantity(1);
      setMainImage(0);
      window.scrollTo(0, 0);
    }
  }, [product?.id]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [product?.id, mainImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-gold hover:underline">Back to shop</Link>
      </div>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, selectedVariant);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-4 md:px-8 py-4 text-xs text-muted uppercase tracking-wider">
        <Link to="/" className="hover:text-charcoal">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-charcoal">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{product.name}</span>
      </div>

      <div className="max-w-content mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-white border border-hairline overflow-hidden">
              <img
                data-strk-img-id={`product-detail-${product.id}-${mainImage}`}
                data-strk-img={`[product-detail-name] [product-detail-desc] gold jewelry detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors ${mainImage === i ? 'border-charcoal' : 'border-hairline hover:border-charcoal/50'}`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`${product.name} gold jewelry angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-8">
            <h1
              id="product-detail-name"
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] mb-2"
            >
              {product.name}
            </h1>
            <p id="product-detail-desc" className="hidden">{product.name} {product.category}</p>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <span className="text-sm text-muted">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-muted leading-relaxed mb-6">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-xs uppercase tracking-wider text-muted mb-2 block">
                  Tone
                </label>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-sm uppercase tracking-wider border transition-colors ${selectedVariant === v ? 'border-charcoal bg-charcoal text-cream' : 'border-hairline hover:border-charcoal'}`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-muted mb-2 block">
                Quantity
              </label>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-hairline/50 transition-colors text-sm"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-hairline/50 transition-colors text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAdd}
                className="flex-1 bg-gold text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-gold-hover transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 border flex items-center justify-center transition-colors ${wishlisted ? 'border-gold text-gold bg-gold/5' : 'border-hairline hover:border-charcoal'}`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-gold' : ''}`} />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-hairline">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. Delivery within 3-7 business days. 30-day hassle-free returns. Full refund or exchange — no questions asked.' },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-b border-hairline">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-wider font-medium">{title}</span>
                    {openAccordion === key ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </button>
                  {openAccordion === key && (
                    <div className="pb-4 text-sm text-muted leading-relaxed">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-hairline bg-cream py-16 md:py-20">
          <div className="max-w-content mx-auto px-4 md:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-white border border-hairline overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`${p.name} gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-[0.15em] group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
