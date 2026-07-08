import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import imageMap from '@/lib/imageMap';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [mainImg, setMainImg] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setQuantity(1);
    setMainImg(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="heading-md text-dark-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const thumbnails = [
    { id: product.imgId, src: imageMap[product.imgId] || '' },
    { id: `${product.imgId}-angle2`, src: imageMap[`${product.imgId}-angle2`] || imageMap[product.imgId] || '' },
    { id: `${product.imgId}-angle3`, src: imageMap[`${product.imgId}-angle3`] || imageMap[product.imgId] || '' },
  ];

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `Material: ${product.material}\n\n${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.\n\n30-day hassle-free returns. Items must be in original condition with all packaging.',
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="section-padding py-4">
        <nav className="font-sans text-xs text-dark-500 flex items-center gap-2">
          <Link to="/" className="hover:text-dark-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dark-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-dark-900">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-stone-200 overflow-hidden mb-4">
              <img
                src={thumbnails[mainImg].src}
                alt={product.imgAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbnails.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setMainImg(i)}
                  className={`w-20 h-20 bg-stone-200 overflow-hidden border-2 transition-colors ${
                    mainImg === i ? 'border-gold-500' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            <h1 className="product-name text-lg md:text-xl mb-3 text-dark-900">{product.name}</h1>
            <p className="font-sans text-2xl font-medium text-dark-900 mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-stone-300'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-dark-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="body-md text-dark-600 mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wider text-dark-600 mb-3">
                Tone: <span className="font-medium text-dark-900">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 font-sans text-sm border transition-all ${
                      selectedVariant === i
                        ? 'border-gold-500 bg-gold-500 text-white'
                        : 'border-stone-300 text-dark-700 hover:border-gold-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-wider text-dark-600 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-dark-600 hover:text-dark-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 font-sans text-sm font-medium text-dark-900 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-dark-600 hover:text-dark-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-8">
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-stone-300">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-stone-300">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm uppercase tracking-wider text-dark-800">
                      {acc.title}
                    </span>
                    {activeAccordion === acc.key ? (
                      <ChevronUp size={16} className="text-dark-600" />
                    ) : (
                      <ChevronDown size={16} className="text-dark-600" />
                    )}
                  </button>
                  {activeAccordion === acc.key && (
                    <div className="pb-4 animate-fade-in">
                      <p className="body-sm text-dark-600 whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section-padding py-16 md:py-24 border-t border-stone-200">
        <h2 className="heading-md text-dark-900 text-center mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
