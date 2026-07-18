import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/lib/cart';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-border-light py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm font-sans font-medium tracking-wider text-charcoal uppercase">
          {title}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-warm-gray-500" /> : <ChevronDown className="w-4 h-4 text-warm-gray-500" />}
      </button>
      <div className={`mt-3 overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="text-sm text-warm-gray-500 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setAddedToCart(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-warm-gray-500 font-sans">Product not found</p>
          <Link to="/shop" className="mt-4 text-gold hover:text-gold-dark font-sans text-sm tracking-wider uppercase transition-colors inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs font-sans text-warm-gray-400 tracking-wider uppercase">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-gray-500">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery - left */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-charcoal/5 overflow-hidden rounded-sm relative">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${idx}`}
                    data-strk-img={`[product-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info - right */}
          <div className="flex flex-col">
            <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-2">
              {product.category}
            </p>
            <h1
              id={`product-title-${product.id}`}
              className="text-3xl md:text-4xl font-serif font-semibold text-charcoal tracking-wider uppercase"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray-500 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif font-semibold text-charcoal mt-4">
              ${product.price}
            </p>

            <p id={`product-desc-${product.id}`} className="text-warm-gray-500 font-sans text-sm leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-sans font-medium tracking-wider text-charcoal uppercase mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm font-sans tracking-wider uppercase transition-all duration-300 rounded-none ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-white'
                        : 'bg-white border border-border-medium text-warm-gray-500 hover:border-charcoal'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-border-medium">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans font-medium text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 font-sans text-sm tracking-widest uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-700 text-white'
                    : 'bg-gold text-white hover:bg-gold-dark'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {addedToCart ? 'Added!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-b border-border-light">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.details}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            You May Also Like
          </h2>
          <div className="w-12 h-0.5 bg-gold/40 mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[3/4] bg-charcoal/5 overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={`related-${p.id}`}
                  data-strk-img={`[related-title-${p.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-title-${p.id}`} className="text-xs font-serif font-semibold tracking-widest text-charcoal uppercase mt-3">
                {p.name}
              </h3>
              <p className="text-sm font-sans font-medium text-charcoal mt-0.5">${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}