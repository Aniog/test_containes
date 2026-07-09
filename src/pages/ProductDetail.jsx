import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, getStarArray, cn, resolveStrkImgUrl } from '@/lib/utils';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const colorLabels = { gold: 'Gold Tone', silver: 'Silver Tone' };

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-sm tracking-widest uppercase text-warm-700">{title}</span>
        <ChevronDown className={cn('w-4 h-4 text-warm-400 transition-transform duration-300', open && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', open ? 'max-h-96 pb-5' : 'max-h-0')}>
        <p className="font-sans text-sm text-warm-500 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [gallerySrcs, setGallerySrcs] = useState([]);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found);
    if (found) setSelectedColor(found.colors[0]);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!product) return;
    const ids = [product.imgIdPrimary, product.imgIdHover];
    const srcs = ids.map(imgId => resolveStrkImgUrl(imgId) || null);
    setGallerySrcs(srcs);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="font-serif text-xl text-warm-400">Product not found</p>
      </div>
    );
  }

  const stars = getStarArray(product.rating);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
  };

  const galleryImages = [
    { id: product.imgIdPrimary, label: 'Main view' },
    { id: product.imgIdHover, label: 'Detail view' },
  ];

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-warm-400 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-warm-600 capitalize">{product.category}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-16 md:pb-24">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-warm-50 rounded-lg overflow-hidden">
              {gallerySrcs[activeImage] ? (
                <img
                  src={gallerySrcs[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="w-full h-full bg-warm-100 animate-pulse" />
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    'aspect-square bg-warm-50 rounded-md overflow-hidden border-2 transition-all duration-200',
                    activeImage === idx ? 'border-gold' : 'border-transparent hover:border-warm-200'
                  )}
                >
                  {gallerySrcs[idx] ? (
                    <img
                      src={gallerySrcs[idx]}
                      alt={img.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-warm-100 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-[10px] tracking-widest-2xl uppercase text-gold mb-3">
              {product.category}
            </p>
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-warm-800">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(stars.full)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                {[...Array(stars.empty)].map((_, i) => (
                  <Star key={`e-${i}`} className="w-4 h-4 text-warm-200" />
                ))}
              </div>
              <span className="text-xs text-warm-400 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl text-warm-800 mt-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p id="pdp-desc" className="font-sans text-sm text-warm-500 leading-relaxed mt-4 max-w-md">
              {product.description}
            </p>

            <div className="w-full h-[1px] bg-warm-200 my-6" />

            {/* Color selector */}
            <div className="space-y-3">
              <p className="font-sans text-xs tracking-wider uppercase text-warm-500">
                Tone: <span className="text-warm-700">{colorLabels[selectedColor]}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'px-5 py-2 rounded-sm font-sans text-xs tracking-wider uppercase border transition-all duration-200',
                      selectedColor === color
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-warm-200 text-warm-400 hover:border-warm-300'
                    )}
                  >
                    {colorLabels[color]}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3 mt-6">
              <p className="font-sans text-xs tracking-wider uppercase text-warm-500">Quantity</p>
              <div className="flex items-center border border-warm-200 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-warm-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-warm-500" />
                </button>
                <span className="px-6 py-3 font-sans text-sm text-warm-700 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-warm-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-warm-500" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-warm-800 text-white font-sans text-xs tracking-widest uppercase py-4 mt-8 hover:bg-gold transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="w-full h-[1px] bg-warm-200 my-6" />

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion title="Description" defaultOpen>
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="py-16 md:py-24 border-t border-warm-200">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-warm-800">
              You May Also Like
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
