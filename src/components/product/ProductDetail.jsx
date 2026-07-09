import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-surface">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase text-velmora-gold underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      image: product.images[0].src,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <main className="pt-20 lg:pt-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-xs text-velmora-muted">
            <Link to="/" className="hover:text-velmora-base transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velmora-base transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-velmora-base">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-base overflow-hidden">
              <img
                src={product.images[selectedImage].src}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-velmora-base overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-xl mt-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-border'
                  }`}
                />
              ))}
              <span className="text-xs text-velmora-muted ml-1">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-velmora-base/70">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-velmora-muted mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-base bg-velmora-base text-white'
                        : 'border-velmora-border text-velmora-base hover:border-velmora-base'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-base text-white py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added!' : 'Add to Bag'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border pt-6 space-y-1">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onClick={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p className="text-sm leading-relaxed text-velmora-base/70">{product.description}</p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <div className="space-y-3 text-sm leading-relaxed text-velmora-base/70">
                  <p><strong className="text-velmora-base">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-velmora-base">Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <p className="text-sm leading-relaxed text-velmora-base/70">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pt-16 border-t border-velmora-border">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velmora-base overflow-hidden">
                    <img
                      src={p.images[0].src}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-sm tracking-wider uppercase">{p.name}</h3>
                  <p className="font-sans text-sm mt-1">${p.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Accordion({ title, isOpen, onClick, children }) {
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase font-sans font-medium text-velmora-base hover:text-velmora-gold transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}