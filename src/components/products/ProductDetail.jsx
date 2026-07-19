import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from './ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-serif text-2xl">Product not found</h1>
          <Link to="/collections" className="btn-outline mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
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
      content: 'Our jewelry is crafted with 18K gold plating over sterling silver or brass. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-secondary)] pt-[72px]">
      <div className="container-main py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <li><Link to="/" className="hover:text-[var(--color-accent)]">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections" className="hover:text-[var(--color-accent)]">Shop</Link></li>
            <li>/</li>
            <li className="text-[var(--color-primary)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[var(--color-secondary-dark)] mb-4">
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
                  className={`w-20 h-24 border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-[var(--color-accent)]' 
                      : 'border-transparent hover:border-[var(--color-muted-light)]'
                  }`}
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
          <div className="lg:pl-8">
            <h1 className="heading-serif text-3xl md:text-4xl">{product.name}</h1>
            
            {/* Price */}
            <p className="mt-4 text-2xl text-[var(--color-accent)] font-medium">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'text-[var(--color-muted-light)]'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="divider-thick my-6" />

            {/* Description */}
            <p className="text-[var(--color-muted)] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="text-sm font-medium block mb-3">
                Color: <span className="text-[var(--color-muted)] font-normal capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wide transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--color-border)] hover:border-[var(--color-muted)]'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="text-sm font-medium block mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[var(--color-border)]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[var(--color-secondary-dark)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[var(--color-secondary-dark)] transition-colors"
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
              className="w-full mt-8 btn-primary flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[var(--color-border)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-[var(--color-muted)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--color-muted)]" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
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
          <h2 className="heading-serif text-3xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}