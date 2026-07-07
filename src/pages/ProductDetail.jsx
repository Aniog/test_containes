import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage || product.image];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. We offer 30-day returns for unworn items in original packaging. Express shipping options available at checkout.' },
  ];

  return (
    <main className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-ivory overflow-hidden">
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
                  className={`w-20 h-24 bg-velmora-ivory overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-2xl lg:text-3xl tracking-widest text-velmora-charcoal">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-taupe/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl text-velmora-gold font-medium">${product.price}</p>

            {/* Description */}
            <p className="mt-6 text-velmora-charcoal/70 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm text-velmora-charcoal/60 mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-wider transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm text-velmora-charcoal/60 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-sand">
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
              className="w-full mt-8 py-4 bg-velmora-gold text-white font-medium tracking-widest hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-sand/50">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-sand/50">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-lg text-velmora-charcoal">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5 text-velmora-taupe" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-velmora-taupe" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-charcoal/70 leading-relaxed">
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
          <h2 className="font-serif text-2xl lg:text-3xl text-velmora-charcoal text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}