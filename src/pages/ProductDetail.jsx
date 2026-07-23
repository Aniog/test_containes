import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-section-mobile lg:py-section text-center">
        <h1 className="font-serif text-2xl text-velmora-black">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
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
      content: `This piece is crafted from ${product.material}, designed to last. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. Free return shipping on all orders.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container py-4 border-b border-velmora-border">
        <nav className="flex items-center gap-2 text-sm text-velmora-gray">
          <Link to="/" className="hover:text-velmora-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="py-section-mobile lg:py-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-velmora-light overflow-hidden">
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
                    className={`
                      w-20 h-24 overflow-hidden border-2 transition-colors
                      ${selectedImage === index
                        ? 'border-velmora-gold'
                        : 'border-transparent hover:border-velmora-border'
                      }
                    `}
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
            <div className="lg:pl-4">
              {/* Name & Price */}
              <h1 className="font-serif text-3xl md:text-4xl text-velmora-black uppercase tracking-wider">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl text-velmora-black font-medium">
                ${product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-gray">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-velmora-gray leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mt-8">
                <label className="block text-sm uppercase tracking-wider text-velmora-gray mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`
                        px-6 py-3 border text-sm uppercase tracking-wider transition-all
                        ${selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-border text-velmora-black hover:border-velmora-gold'
                        }
                      `}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="block text-sm uppercase tracking-wider text-velmora-gray mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-velmora-border">
                    <button
                      className="w-12 h-12 flex items-center justify-center text-velmora-black hover:text-velmora-gold transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-velmora-black">
                      {quantity}
                    </span>
                    <button
                      className="w-12 h-12 flex items-center justify-center text-velmora-black hover:text-velmora-gold transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-8">
                <Button size="full" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>

              {/* Accordions */}
              <div className="mt-12 border-t border-velmora-border">
                {accordionItems.map((item) => (
                  <div key={item.id} className="border-b border-velmora-border">
                    <button
                      onClick={() => setOpenAccordion(
                        openAccordion === item.id ? null : item.id
                      )}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm uppercase tracking-wider text-velmora-black">
                        {item.title}
                      </span>
                      {openAccordion === item.id ? (
                        <ChevronUp className="w-5 h-5 text-velmora-gray" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-velmora-gray" />
                      )}
                    </button>
                    <div
                      className={`
                        overflow-hidden transition-all duration-300
                        ${openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'}
                      `}
                    >
                      <p className="text-sm text-velmora-gray leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-section-mobile lg:py-section bg-velmora-light">
          <div className="container">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-black text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}