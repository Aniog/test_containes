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
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-[#C9A962] hover:underline">
          Return to shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.imageHover];

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
      content:
        'All Velmora jewelry is crafted with 18K gold plating on sterling silver. To maintain the beauty of your pieces, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#6B6560]">
            <li>
              <Link to="/" className="hover:text-[#C9A962] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-[#C9A962] transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#1A1815]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-[#F5F3EF] mb-4 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 border-2 transition-colors duration-300 ${
                    selectedImage === index
                      ? 'border-[#C9A962]'
                      : 'border-transparent hover:border-[#C9A962]/50'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="text-2xl md:text-3xl tracking-[0.15em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'fill-[#E8E4DE] text-[#E8E4DE]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6560]">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-2xl text-[#C9A962] mb-6">${product.price}</p>

            <p className="text-[#6B6560] leading-relaxed mb-6">
              {product.description}. Crafted with 18K gold plating on sterling
              silver for lasting beauty. Hypoallergenic and perfect for everyday
              wear.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm text-[#6B6560] mb-3">
                Color: <span className="text-[#1A1815] capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-sm tracking-[0.05em] border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-[#C9A962] bg-[#C9A962] text-white'
                        : 'border-[#E8E4DE] text-[#1A1815] hover:border-[#C9A962]'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm text-[#6B6560] mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#C9A962] text-white text-sm tracking-[0.1em] uppercase hover:bg-[#B8954F] transition-colors duration-300 shadow-[0_4px_12px_rgba(201,169,98,0.3)] mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-[#E8E4DE]">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-[#E8E4DE]">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.id ? null : item.id
                      )
                    }
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm tracking-[0.05em] uppercase">
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
                      openAccordion === item.id
                        ? 'max-h-40 pb-4'
                        : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#6B6560] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 pt-16 border-t border-[#E8E4DE]">
          <h2
            className="text-2xl md:text-3xl text-center mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}