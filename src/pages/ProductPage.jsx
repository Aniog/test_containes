import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-text-muted">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <main ref={containerRef} className="pt-24 md:pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-[4/5] bg-velmora-gold-light rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[pdp-title-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((v) => (v === 0 ? product.images.length - 1 : v - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((v) => (v === product.images.length - 1 ? 0 : v + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-20 bg-velmora-gold-light rounded-sm overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-velmora-gold mb-2">{product.category}</p>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase mb-3"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'fill-velmora-divider text-velmora-divider'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-2xl font-medium text-velmora-text mb-6">${product.price}</p>
            <p className="text-velmora-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velmora-text-secondary mb-3">Finish</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 text-sm border transition-colors duration-300 ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-divider text-velmora-text-secondary hover:border-velmora-gold'
                    }`}
                  >
                    {tone} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velmora-text-secondary mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-velmora-divider rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-velmora-divider rounded-full hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-velmora-success text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-hover'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-divider">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
                { title: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <Accordion key={section.title} title={section.title} content={section.content} />
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-velmora-divider pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((rp) => (
              <Link to={`/product/${rp.id}`} key={rp.id} className="group">
                <div className="aspect-[3/4] bg-velmora-gold-light rounded-sm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[related-title-${rp.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  id={`related-title-${rp.id}`}
                  className="font-serif text-xs tracking-[0.12em] uppercase mb-1"
                >
                  {rp.name}
                </h3>
                <p className="text-sm font-medium">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-widest uppercase text-velmora-text-secondary hover:text-velmora-text transition-colors"
      >
        {title}
        <span className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <Plus className="w-3.5 h-3.5" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-text-secondary leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
