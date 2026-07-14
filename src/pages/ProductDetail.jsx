import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const images = [product.image, product.imageHover];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: '18K gold plated on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping. 30-day returns. Orders ship within 1-2 business days.' },
  ];

  return (
    <main className="min-h-screen pt-[72px]">
      <div className="container-main py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections" className="hover:text-[var(--color-gold)]">Shop</Link></li>
            <li>/</li>
            <li className="text-[var(--color-charcoal)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[var(--color-ivory)] overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[var(--color-ivory)] overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[var(--color-gold)]' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="text-product-name text-sm">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    strokeWidth={1}
                    className={i < product.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-border)]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-muted)]">
                {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl mt-4">${product.price}</p>

            <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-3">Color</label>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 border text-sm capitalize transition-all duration-200 ${
                      variant === v
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-border)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[var(--color-gold)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 btn-accent"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-[var(--color-border)]">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[var(--color-border)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-3xl md:text-4xl text-center tracking-wide mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
