import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductPage() {
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
          <h1 className="font-serif text-3xl text-velmora-charcoal">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.hoverImage];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `This piece is crafted from ${product.material}, designed to last a lifetime with proper care. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.',
    },
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-sand/30 overflow-hidden">
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
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest-xl uppercase text-velmora-charcoal">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mt-4">
              <span className="font-serif text-2xl text-velmora-charcoal">${product.price}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'}
                  />
                ))}
                <span className="text-sm text-velmora-taupe ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="mt-6 text-velmora-taupe">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-charcoal mb-3">Color</label>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 border text-sm tracking-wider uppercase transition-all ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block text-sm text-velmora-charcoal mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-sand">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-velmora-sand/50 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-velmora-sand/50 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="full"
              className="mt-8"
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-t border-velmora-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-lg text-velmora-charcoal">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp size={20} className="text-velmora-taupe" />
                    ) : (
                      <ChevronDown size={20} className="text-velmora-taupe" />
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
        <section className="mt-20">
          <h2 className="font-serif text-3xl text-velmora-charcoal mb-8">You May Also Like</h2>
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