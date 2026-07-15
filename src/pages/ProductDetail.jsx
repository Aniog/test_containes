import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setActiveImage(0);
    setSelectedColor('gold');
    setQuantity(1);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs text-taupe hover:text-gold transition-colors font-sans uppercase tracking-wider">
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-warm-cream overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-warm-cream overflow-hidden border-2 transition-colors duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-taupe-pale'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pt-8">
            <p className="text-xs tracking-widest uppercase text-taupe font-sans font-medium">{product.categoryLabel}</p>
            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl text-warm-black mt-1 tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe-pale'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe font-sans">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-sans text-2xl text-gold font-medium mt-4">${product.price}</p>
            <p id={product.descId} className="text-sm text-taupe leading-relaxed mt-4 font-sans">{product.description}</p>

            {/* Color variant */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-warm-black mb-3">
                Finish: <span className="text-gold capitalize">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      color === 'gold' ? 'bg-gold border-gold' : 'bg-taupe-light border-taupe-light'
                    } ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gold' : ''}`}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-warm-black mb-3">Quantity</p>
              <div className="flex items-center border border-taupe-pale w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-taupe-pale/50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-taupe-pale/50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 flex items-center justify-center gap-3 text-base py-4 transition-all duration-300 ${
                added ? 'bg-green-700 border-green-700' : ''
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-taupe-pale">
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}