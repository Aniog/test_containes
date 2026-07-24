import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/lib/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (containerRef.current && product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setQuantity(1);
    setSelectedColor('Gold');
    setAdded(false);
    setOpenAccordion('description');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-brand-ink">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-warmgray tracking-wide mb-8">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-brand-sand/20 overflow-hidden mb-4">
              <img
                alt={product.images[selectedImage]?.alt || product.name}
                data-strk-img-id={`pdp-main-${product.id}-${selectedImage}-8f2a`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 md:w-20 aspect-[3/4] overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-brand-gold' : 'border-transparent hover:border-brand-sand'
                  }`}
                >
                  <img
                    alt={img.alt}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-8f2a`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-brand-ink leading-snug"
            >
              {product.name}
            </h1>
            <p
              id={`pdp-desc-${product.id}`}
              className="sr-only"
            >
              {product.description}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'fill-brand-sand text-brand-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warmgray">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-light text-brand-ink mt-4">${product.price}</p>

            <p className="text-sm text-brand-warmgray leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-brand-warmgray mb-3">Finish</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 text-xs uppercase tracking-wider border transition-all ${
                      selectedColor === color
                        ? 'border-brand-gold bg-brand-gold/5 text-brand-gold-dark'
                        : 'border-brand-sand text-brand-warmgray hover:border-brand-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-brand-warmgray mb-3">Quantity</p>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-brand-warmgray hover:text-brand-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-brand-warmgray hover:text-brand-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAdd}
              className={`w-full mt-8 py-3.5 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-brand-gold hover:bg-brand-gold-dark text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand/50 pt-6 space-y-1">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-brand-sand/30">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors"
                  >
                    {acc.label}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-brand-warmgray leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-brand-sand/50 pt-16">
          <h2 className="font-serif text-xl md:text-2xl tracking-wider text-brand-ink text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-brand-sand/20 overflow-hidden mb-3">
                    <img
                      alt={related.images[0].alt}
                      data-strk-img-id={`related-${related.id}-img-8f2a`}
                      data-strk-img={`[related-name-${related.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    id={`related-name-${related.id}`}
                    className="font-serif text-xs tracking-[0.1em] uppercase text-brand-ink group-hover:text-brand-gold-dark transition-colors"
                  >
                    {related.name}
                  </h3>
                  <p className="text-sm text-brand-charcoal mt-1">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
