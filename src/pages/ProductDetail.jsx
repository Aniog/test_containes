import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(product?.variants[0]?.value || 'gold');
    setQuantity(1);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-taupe">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs tracking-wider text-taupe/60 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-taupe">{product.shortName}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="aspect-square bg-sand rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.imgId}-main-${selectedImage}`}
                data-strk-img={`[pdp-name-${product.id}] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.shortName}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i ? 'border-gold shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[pdp-name-${product.id}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.shortName} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span
              id={`pdp-name-${product.id}`}
              className="hidden"
            >
              {product.shortName}
            </span>

            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-soft-black leading-tight mb-3">
              {product.name}
            </h1>

            <p className="text-2xl text-gold-dark font-medium mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-none text-gold-light/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-taupe/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-taupe mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`px-5 py-2.5 text-xs tracking-[0.12em] uppercase rounded-full border transition-all duration-300 ${
                      selectedVariant === variant.value
                        ? 'border-gold bg-gold/10 text-gold-dark'
                        : 'border-gold-light/30 text-taupe hover:border-gold-light'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-gold-light/40 rounded-sm h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full text-taupe hover:text-soft-black transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm text-soft-black font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full text-taupe hover:text-soft-black transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-primary h-12 flex-1 text-xs gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Bag — ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-gold-light/30 pt-4">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-gold-light/20">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="flex items-center justify-between w-full py-4 text-xs tracking-[0.12em] uppercase text-soft-black hover:text-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-taupe" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe/70 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-soft-black font-normal">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
