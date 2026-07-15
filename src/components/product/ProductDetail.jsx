import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import ProductCard from '../home/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline mt-4 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageHover].filter(Boolean);

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'All our jewelry is crafted from 18K gold-plated sterling silver or brass. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.',
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-muted">
            <li><Link to="/" className="hover:text-velmora-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-sand">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-24 bg-velmora-sand',
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < product.rating
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-muted'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-muted">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-velmora-gold mt-4">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-velmora-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm text-velmora-muted mb-3">Color: <span className="text-velmora-charcoal capitalize">{selectedVariant}</span></p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-3 text-sm uppercase tracking-wider border transition-all',
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-charcoal/20 text-velmora-charcoal hover:border-velmora-gold'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-charcoal/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-velmora-charcoal">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
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
              className="w-full mt-8 py-4 bg-velmora-gold text-white text-sm uppercase tracking-widest hover:bg-velmora-gold-light transition-all duration-300"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-charcoal/10">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-charcoal/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm uppercase tracking-wider text-velmora-charcoal">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-muted" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-sm text-velmora-muted leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}