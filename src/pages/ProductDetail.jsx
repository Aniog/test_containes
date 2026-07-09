import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const materials = ['gold', 'silver'];

const accordionData = [
  {
    title: 'Description',
    content:
      'Each Velmora piece is handcrafted with precision and care. Our demi-fine jewelry uses 18K gold plating over sterling silver or brass, with ethically sourced cubic zirconia and natural crystals. Designed for lasting wear.',
  },
  {
    title: 'Materials & Care',
    content:
      '18K gold plated over sterling silver. Hypoallergenic and nickel-free. To maintain your jewelry, avoid contact with water, perfume, and lotions. Store in the included pouch. Gently polish with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping on all orders. Estimated delivery: 3–7 business days. 30-day free returns from delivery date. Items must be unworn and in original packaging. Refunds processed within 5 business days.',
  },
];

function AccordionItem({ title, children, open, onToggle }) {
  return (
    <div className="border-t border-brand-cream-dark">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="font-sans text-sm text-brand-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-brand-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-taupe">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-brand-cream overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-brand-cream overflow-hidden border transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <h1 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-cream-dark'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal font-medium mb-6">${product.price}</p>

            <p className="font-sans text-sm text-brand-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material selector */}
            <div className="mb-6">
              <label className="font-sans text-xs uppercase tracking-wider text-brand-charcoal block mb-3">
                Finish
              </label>
              <div className="flex gap-3">
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMaterial(m)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider border transition-all duration-200 ${
                      selectedMaterial === m
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-cream-dark text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {m === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-xs uppercase tracking-wider text-brand-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-cream-dark w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-brand-cream transition-colors"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-brand-cream transition-colors"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 font-sans text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'btn-accent'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  open={openAccordion === item.title}
                  onToggle={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-brand-cream-dark">
            <h2 className="heading-serif text-2xl md:text-3xl text-brand-charcoal font-light mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.slug}`} className="group">
                  <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="product-name text-brand-charcoal group-hover:text-brand-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}