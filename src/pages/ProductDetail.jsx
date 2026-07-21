import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageHover || product.image];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
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
      content: `This piece is crafted from ${product.material}, designed to last. To maintain its beauty, avoid direct contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day returns for unworn items in original packaging. Express shipping options available at checkout.',
    },
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
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
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-taupe'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-8">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-velmora-charcoal">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-2xl text-velmora-gold font-medium mt-4">
              ${product.price}
            </p>

            <p className="text-velmora-taupe mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm uppercase tracking-wider text-velmora-taupe mb-3">
                Color
              </label>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-taupe/30 text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm uppercase tracking-wider text-velmora-taupe mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-taupe/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 btn-primary flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-t border-velmora-taupe/20">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.id ? '' : item.id)
                    }
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm uppercase tracking-wider text-velmora-charcoal">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-taupe leading-relaxed">
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
          <h2 className="font-serif text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}