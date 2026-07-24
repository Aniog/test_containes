import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem, openDrawer } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-base">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-dark mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline text-xs tracking-widest uppercase">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: `${product.shipping} Free 30-day returns on all items.` },
  ];

  // Related products: exclude current
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-velmora-base pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto section-padding py-8 md:py-16">
        {/* Breadcrumb */}
        <div className="text-[10px] tracking-widest uppercase font-sans text-velmora-subtle mb-8">
          <Link to="/" className="hover:text-velmora-dark transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-dark transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-dark">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-muted mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-velmora-accent-light/20 via-velmora-surface to-velmora-muted flex items-center justify-center">
                <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-br from-velmora-accent/10 via-velmora-accent-light/30 to-velmora-accent/5 opacity-50" />
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 flex-shrink-0 bg-velmora-muted transition-all ${
                    selectedImage === idx ? 'ring-1 ring-velmora-accent opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-velmora-accent-light/20 to-velmora-muted" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-dark leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'fill-velmora-muted text-velmora-muted'}`}
                />
              ))}
              <span className="text-xs text-velmora-subtle ml-1 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-velmora-dark mb-6">${product.price}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-velmora-body leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all ${
                      selectedVariant === i
                        ? 'border-velmora-dark text-velmora-dark bg-velmora-surface'
                        : 'border-velmora-border text-velmora-subtle hover:border-velmora-dark'
                    }`}
                  >
                    {product.colors[i]}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-11 flex items-center justify-center text-velmora-body hover:text-velmora-dark transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-11 flex items-center justify-center text-sm font-medium text-velmora-dark font-sans">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-11 flex items-center justify-center text-velmora-body hover:text-velmora-dark transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 btn-accent text-xs tracking-widest uppercase gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border pt-6 space-y-0">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase font-sans text-velmora-dark hover:text-velmora-accent transition-colors"
                  >
                    {item.label}
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-4 h-4 text-velmora-subtle" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-subtle" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-body leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 md:mt-32 border-t border-velmora-border pt-16 md:pt-20">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-dark tracking-wide">
              You May Also Like
            </h2>
            <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-5" />
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
