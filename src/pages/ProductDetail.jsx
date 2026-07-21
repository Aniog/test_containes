import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StockImg, ImageContainer } from '@/lib/images';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wide text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-stone leading-relaxed whitespace-pre-line">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="font-serif text-xl text-velmora-stone">Product not found</p>
        <Link
          to="/shop"
          className="mt-4 font-sans text-sm text-velmora-gold hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, variant, quantity);
  };

  const nextImage = () => setSelectedImage((i) => (i + 1) % product.images.length);
  const prevImage = () =>
    setSelectedImage((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <ImageContainer deps={[productId, selectedImage]}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-24 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 rounded overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === idx
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <StockImg
                    id={`detail-thumb-${img.id}`}
                    query={`[detail-title]`}
                    ratio="3x4"
                    width={200}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <span id="detail-title" className="sr-only">
                {product.name} gold jewelry
              </span>
            </div>

            <div className="relative flex-1 aspect-[3/4] bg-velmora-parchment rounded overflow-hidden">
              <StockImg
                id={`detail-main-${product.images[selectedImage].id}`}
                query={`[detail-title]`}
                ratio="3x4"
                width={800}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-velmora-espresso hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-velmora-espresso hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-velmora-espresso">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="font-sans text-sm text-velmora-espresso font-medium">
                  {product.rating}
                </span>
              </div>
              <span className="font-sans text-sm text-velmora-taupe">
                {product.reviewCount} reviews
              </span>
            </div>
            <p className="font-sans text-xl md:text-2xl font-medium text-velmora-espresso mt-5">
              ${product.price}
            </p>
            <p className="font-sans text-sm text-velmora-stone leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <p className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 rounded-full border font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                      variant === v
                        ? 'border-velmora-espresso bg-velmora-espresso text-white'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-taupe'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs font-medium tracking-wide uppercase text-velmora-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-velmora-espresso text-white font-sans text-xs font-medium tracking-[0.25em] uppercase py-4 rounded hover:bg-velmora-ink transition-colors duration-300"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.details + '\n\n' + product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {'Free worldwide shipping on all orders over $50.\n\nOrders are processed within 1-2 business days. Standard delivery takes 5-10 business days. Express delivery available at checkout.\n\nWe offer hassle-free 30-day returns. Items must be unworn and in original packaging.'}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-velmora-parchment py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-espresso mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-velmora-cream rounded overflow-hidden">
                  <StockImg
                    id={`related-${p.id}`}
                    query={`[related-title-${p.id}]`}
                    ratio="3x4"
                    width={500}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span id={`related-title-${p.id}`} className="sr-only">
                    {p.name} gold jewelry
                  </span>
                </div>
                <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-espresso mt-3 group-hover:text-velmora-gold transition-colors">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-velmora-stone mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ImageContainer>
  );
}
