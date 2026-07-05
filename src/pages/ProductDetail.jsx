import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const images = [product.image, product.hoverImage];

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: `Crafted with 18K gold plating on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.` },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging. Express shipping available at checkout.' },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
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
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-taupe'}`}
                  />
                ))}
              </div>
              <span className="text-velmora-taupe text-sm">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-velmora-gold font-medium mb-6">${product.price}</p>

            <p className="text-velmora-taupe mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-velmora-charcoal mb-3">
                Finish
              </label>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 border text-sm uppercase tracking-widest transition-all duration-300 ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-taupe text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-velmora-charcoal mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity, variant)}
              className="w-full bg-velmora-charcoal text-white py-4 text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors duration-300 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            <p className="text-velmora-taupe text-sm text-center">
              {product.inStock ? 'In Stock' : 'Out of Stock'} · Free Shipping
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-20 max-w-2xl">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-b border-velmora-sand">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="font-serif text-lg">{accordion.title}</span>
                {openAccordion === accordion.id ? (
                  <ChevronUp className="w-5 h-5 text-velmora-taupe" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-taupe" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === accordion.id ? 'max-h-40 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-velmora-taupe">{accordion.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}