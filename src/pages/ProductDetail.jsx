import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState(null);

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setSelectedMaterial('gold');
    setOpenAccordion(null);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-taupe text-lg font-serif">Product not found</p>
          <Link to="/shop" className="text-warm-gold text-sm mt-2 inline-block underline underline-offset-2">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
  };

  return (
    <main className="min-h-screen bg-cream pt-24 md:pt-28 pb-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-taupe hover:text-warm-gold transition-colors duration-300 mb-6 font-sans uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-warm-beige/30 rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`${product.description} gold jewelry editorial detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-warm-beige/30 rounded-sm overflow-hidden cursor-pointer border border-warm-beige/60 hover:border-warm-gold transition-colors duration-300"
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`${product.name} gold jewelry angle view`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest-2 text-dark-forest uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-muted-gold fill-muted-gold' : 'text-warm-beige'}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="w-12 h-[1px] bg-warm-gold my-5" />

            <p className="text-2xl font-serif text-dark-forest">${product.price}.00</p>

            <p className="text-sm text-taupe mt-4 leading-relaxed font-sans">{product.description}</p>

            {/* Material selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-dark-forest font-sans mb-3">Finish:</p>
              <div className="flex gap-3">
                {product.materialOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedMaterial(opt)}
                    className={`px-5 py-2.5 text-sm rounded-sm border transition-all duration-300 ${
                      selectedMaterial === opt
                        ? 'border-warm-gold bg-warm-gold text-white'
                        : 'border-warm-beige text-dark-forest hover:border-taupe'
                    }`}
                  >
                    {opt === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-dark-forest font-sans mb-3">Quantity:</p>
              <div className="flex items-center border border-warm-beige rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-taupe hover:text-dark-forest transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-sm text-dark-forest min-w-[40px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-taupe hover:text-dark-forest transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-warm-gold text-white py-3.5 mt-8 text-sm tracking-wider uppercase rounded-sm hover:bg-warm-gold/90 transition-all duration-300 font-sans"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-taupe text-center mt-3 font-sans">Free worldwide shipping & 30-day returns</p>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm-beige">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-warm-beige">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-dark-forest hover:text-warm-gold transition-colors duration-300 font-sans"
                  >
                    {acc.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed whitespace-pre-line font-sans">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 pt-16 border-t border-warm-beige">
            <h2 className="font-serif text-2xl md:text-3xl text-dark-forest text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-white border border-warm-beige/60 rounded-sm overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[3/4] bg-warm-beige/30 overflow-hidden">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`${p.description} gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-serif text-xs tracking-[0.2em] uppercase text-dark-forest">
                      {p.name}
                    </h3>
                    <p className="text-sm font-medium text-dark-forest mt-1">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}