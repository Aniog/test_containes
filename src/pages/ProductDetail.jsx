import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

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
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image, product.imageHover];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'All Velmora pieces are crafted from 18K gold-plated sterling silver or brass. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-warm-gray">
            <li><Link to="/" className="hover:text-velmora-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-light-gray overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 bg-velmora-light-gray overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-product">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-light-gray'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-2xl font-serif mt-4">${product.price}</p>

            <p className="text-velmora-warm-gray mt-6 leading-relaxed">
              {product.description}. Crafted with attention to detail, this piece embodies the quiet luxury that defines Velmora jewelry.
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Metal: <span className="font-normal text-velmora-warm-gray capitalize">{selectedVariant} Gold</span></p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm font-medium capitalize transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-light-gray hover:border-velmora-gold'
                    }`}
                  >
                    {variant} Gold
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-sm font-medium">Quantity</p>
                <div className="flex items-center border border-velmora-light-gray">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-velmora-light-gray transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-velmora-light-gray transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="w-full bg-velmora-gold text-white py-4 font-medium hover:bg-velmora-gold-dark transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-light-gray">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-light-gray">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <p className="pb-5 text-velmora-warm-gray leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[4/5] bg-velmora-light-gray overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xs uppercase tracking-product">
                    {item.name}
                  </h3>
                  <p className="text-sm text-velmora-warm-gray mt-1">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}