import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, renderStars } from '@/lib/utils';

function Accordion({ title, children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-[#E8E2D8]">
      <button
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#C79A5E] transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-[#6B6358] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const { addItem } = useCart();
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[4/5] bg-[#F0EBE4] overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <h3 className="product-name text-xs md:text-sm truncate">
                <Link to={`/product/${product.id}`} className="hover:text-[#C79A5E] transition-colors">
                  {product.name}
                </Link>
              </h3>
              <p className="text-sm text-[#1A1A1A] mt-1 font-medium">{formatPrice(product.price)}</p>
              <button
                onClick={() => addItem(product)}
                className="btn-primary w-full text-center mt-3"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [variant, setVariant] = React.useState('gold');
  const [quantity, setQuantity] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#1A1A1A]">Product Not Found</h1>
          <Link to="/shop" className="btn-primary mt-6 inline-flex">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const stars = renderStars(product.rating);

  return (
    <div className="pt-24 md:pt-28">
      <div className="max-w-8xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#9C9488] mb-8">
          <Link to="/" className="hover:text-[#C79A5E] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C79A5E] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#6B6358]">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image Gallery */}
          <div className="flex gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 w-16 md:w-20 flex-shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square overflow-hidden border transition-colors ${
                    selectedImage === i
                      ? 'border-[#C79A5E]'
                      : 'border-[#E8E2D8] hover:border-[#9C9488]'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-[#F0EBE4] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="product-name text-xl md:text-2xl">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {stars.map((type, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      type === 'full' ? 'fill-[#C79A5E] text-[#C79A5E]' :
                      type === 'half' ? 'fill-[#C79A5E]/50 text-[#C79A5E]' :
                      'text-[#E8E2D8]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6B6358]">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-[#1A1A1A] font-medium mt-4">{formatPrice(product.price)}</p>

            <p className="text-sm text-[#6B6358] leading-relaxed mt-4">{product.description}</p>

            {/* Variant Pills */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6B6358] mb-3">Variant</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                      variant === v
                        ? 'bg-[#1A1A1A] text-white'
                        : 'bg-transparent text-[#6B6358] border border-[#E8E2D8] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6B6358] mb-3">Quantity</p>
              <div className="flex items-center border border-[#E8E2D8] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#C79A5E] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#C79A5E] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 text-center ${
                added ? 'bg-green-700 hover:bg-green-700' : ''
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-[#E8E2D8]">
              <Accordion title="Description">
                <p>{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders over $50. Standard shipping takes 5-10 business days. Express shipping available at checkout.</p>
                <p className="mt-3">We offer a 30-day return policy for unworn items in original packaging. Contact our support team to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8 border-t border-[#E8E2D8]">
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}