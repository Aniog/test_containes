import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { addItem, toggleCart } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.slug === slug);

  const [selectedColor, setSelectedColor] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  const related = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      color: selectedColor,
      quantity,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      toggleCart(true);
    }, 400);
  };

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-16 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-ink-400 mb-8 tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-600">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-warm-100 overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`[pdp-name-${product.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 flex-shrink-0 bg-warm-100 overflow-hidden border-2 transition-colors ${
                    idx === activeImage ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-img={`[pdp-name-${product.id}] jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-4">
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-[0.14em] uppercase mb-2"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xl font-medium text-ink-800">${product.price}</span>
              <span className="flex items-center gap-1 text-sm text-ink-500">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-ink-500 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color variant */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-wider uppercase text-ink-600 mb-3">
                Finish: <span className="text-ink-800 capitalize">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-gold bg-gold text-white'
                        : 'border-ink-200 text-ink-500 hover:border-ink-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-wider uppercase text-ink-600 mb-3">Quantity</p>
              <div className="flex items-center border border-ink-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-ink-100">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-ink-100">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="flex items-center justify-between w-full py-4 text-sm font-medium tracking-wider uppercase text-ink-700 hover:text-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-ink-500 leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-ink-100">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}