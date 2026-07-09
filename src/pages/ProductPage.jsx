import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const imageGallery = [
  { ratio: '1x1', width: 600 },
  { ratio: '1x1', width: 600 },
  { ratio: '1x1', width: 600 },
];

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found);
    setActiveImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    setOpenAccordion(null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-900 mb-4">Product not found</p>
          <Link to="/shop" className="text-sm text-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const galleryImages = [
    product.image,
    product.imageHover || product.image,
    product.image,
  ];

  const accordions = [
    { id: 'description', title: 'Description', content: product.longDescription },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  return (
    <main className="bg-cream pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="container-wide py-4">
        <div className="flex items-center gap-2 text-xs text-velmora-400">
          <Link to="/" className="hover:text-velmora-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-600">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="container-wide pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-velmora-100 rounded-sm overflow-hidden mb-3">
              <img
                src={galleryImages[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-velmora-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            {/* Back link */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs text-velmora-400 hover:text-velmora-900 transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Shop
            </Link>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-heading-2 tracking-product uppercase text-velmora-900">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-xl md:text-2xl font-serif text-velmora-900">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-velmora-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-velmora-100 my-6" />

            {/* Description */}
            <p className="text-sm text-velmora-500 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-overline text-velmora-400 mb-3">
                Tone: <span className="text-velmora-900 font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-velmora-900 bg-velmora-900 text-white'
                        : 'border-velmora-200 text-velmora-600 hover:border-velmora-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-overline text-velmora-400 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-500 hover:text-velmora-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-500 hover:text-velmora-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full flex items-center justify-center gap-3 bg-velmora-900 hover:bg-gold text-white hover:text-velmora-950 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300"
            >
              <ShoppingBag size={18} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-velmora-400">
              <span>Free Shipping</span>
              <span className="w-px h-3 bg-velmora-200" />
              <span>30-Day Returns</span>
              <span className="w-px h-3 bg-velmora-200" />
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-100">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-100">
                  <button
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-velmora-900 uppercase tracking-wide">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-velmora-400" />
                    ) : (
                      <ChevronDown size={16} className="text-velmora-400" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-velmora-500 leading-relaxed animate-fade-in whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <span className="text-overline uppercase tracking-overline text-gold block mb-2">
              You May Also Like
            </span>
            <h2 className="font-serif text-2xl md:text-heading-3 text-velmora-900">
              Complete Your Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
