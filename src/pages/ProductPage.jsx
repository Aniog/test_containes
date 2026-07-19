import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products, allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = [...products, ...allProducts].find(p => p.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 30-day return policy for unworn items in original packaging. Please allow 5-7 business days for refunds to appear.' },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs tracking-wider text-velvet-500 uppercase mb-8">
          <Link to="/" className="hover:text-velvet-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velvet-900 transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-velvet-900">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-velvet-100 mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-velvet-900 tracking-[0.08em] uppercase font-light">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-velvet-300'}`} />
                ))}
              </div>
              <span className="text-xs text-velvet-500">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-velvet-900 mt-4">${product.price}</p>

            <p className="text-velvet-600 text-sm leading-relaxed mt-6">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-velvet-600 mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velvet-900 bg-velvet-900 text-white'
                        : 'border-velvet-300 text-velvet-700 hover:border-velvet-900'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-velvet-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3.5 text-velvet-700 hover:text-velvet-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium text-velvet-900 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3.5 text-velvet-700 hover:text-velvet-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gold text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velvet-200">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-velvet-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-velvet-700 hover:text-velvet-900 transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-velvet-600 leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28 pt-16 border-t border-velvet-200">
            <h2 className="font-serif text-2xl md:text-3xl text-velvet-900 font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-velvet-100">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] text-velvet-900 uppercase mt-3">
                    {related.name}
                  </h3>
                  <p className="text-sm text-velvet-700 mt-0.5">${related.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}