import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="underline">Return to shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `This piece is crafted from premium 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Orders ship within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging.`
    }
  ];

  return (
    <div className="pt-[72px]">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
            </li>
            <li style={{ color: 'var(--color-muted-light)' }}>/</li>
            <li>
              <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
            </li>
            <li style={{ color: 'var(--color-muted-light)' }}>/</li>
            <li style={{ color: 'var(--color-muted)' }}>{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Image Gallery */}
          <div>
            <div
              className="aspect-[4/5] mb-4 overflow-hidden"
              style={{ backgroundColor: 'var(--color-ivory)' }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-[var(--color-charcoal)]' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: 'var(--color-ivory)' }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl mb-2 tracking-wide">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p
              className="font-sans text-base leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)' }}
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="font-sans text-sm block mb-3">
                Color: <span className="font-medium">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm font-sans tracking-wide border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-border-dark)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-sans text-sm block mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border" style={{ borderColor: 'var(--color-border-dark)' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-sans">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full justify-center mb-4"
            >
              Add to Cart
            </button>

            {/* Material Tag */}
            <p className="font-sans text-xs text-center" style={{ color: 'var(--color-muted-light)' }}>
              {product.material} · Hypoallergenic
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="border-t" style={{ borderColor: 'var(--color-border)' }}>
          {accordionItems.map(item => (
            <div
              key={item.id}
              className="border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-sans text-sm tracking-wide">{item.title}</span>
                {openAccordion === item.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openAccordion === item.id && (
                <div className="pb-5">
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}