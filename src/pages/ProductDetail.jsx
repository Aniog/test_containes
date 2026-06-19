import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find((p) => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageHover];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'All Velmora jewelry is crafted from 18K gold-plated brass or sterling silver. Our pieces are designed to be waterproof and tarnish-resistant. To maintain their beauty, avoid contact with perfumes, lotions, and chemicals. Store in the provided pouch when not in use.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. International orders may be subject to customs duties.'
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-velmora-taupe hover:text-velmora-gold">Home</Link>
          <span className="mx-2 text-velmora-taupe">/</span>
          <Link to="/shop" className="text-velmora-taupe hover:text-velmora-gold">Shop</Link>
          <span className="mx-2 text-velmora-taupe">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-sand/50 mb-4">
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
                  className={`w-20 h-24 bg-velmora-sand/50 ${
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mt-4 text-velmora-charcoal">${product.price}</p>

            <p className="mt-6 text-velmora-taupe leading-relaxed">
              {product.description}. Crafted with attention to detail, this piece embodies the quiet luxury aesthetic that defines Velmora.
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm text-velmora-taupe mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 border text-sm uppercase tracking-widest transition-colors ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-taupe/30 text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm text-velmora-taupe mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-taupe/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-taupe/30 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-charcoal text-white py-4 uppercase tracking-widest text-sm hover:bg-velmora-gold transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-t border-velmora-taupe/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="uppercase tracking-widest text-sm">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-6 text-velmora-taupe text-sm leading-relaxed">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
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