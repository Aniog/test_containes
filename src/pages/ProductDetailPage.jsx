import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Mock product data - in real app, this would come from API
const allProducts = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent. A stunning piece that catches the light with every movement, perfect for adding a touch of sparkle to any outfit. The adjustable design ensures a comfortable fit for all-day wear.",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isBestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace. Delicate floral motifs adorned with crystals in soft pastels, creating a romantic and feminine piece. The 18-inch chain includes a 2-inch extender for perfect placement.",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    category: "Necklaces",
    material: "Gold",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    isBestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. These substantial yet comfortable huggies feature a smooth golden sphere design that sits perfectly on the ear. Hypoallergenic and perfect for sensitive ears.",
    price: 38,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
    ],
    category: "Huggies",
    material: "Gold",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings. Intricate lace-like patterns in warm gold, these earrings showcase masterful craftsmanship and timeless elegance. The delicate drop moves beautifully with you.",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.6,
    reviews: 92,
    isBestseller: false
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, featuring matching pieces that create a coordinated, elegant look. Comes beautifully packaged in our signature Velmora box.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
    ],
    category: "Sets",
    material: "Gold",
    inStock: true,
    rating: 5.0,
    reviews: 67,
    isBestseller: true
  }
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();
  
  const product = allProducts.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }
  
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      material: selectedMaterial
    }, selectedMaterial);
    openCart();
  };
  
  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };
  
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-velmora-text-light mb-8">
          <a href="/" className="hover:text-velmora-gold transition-colors">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/shop" className="hover:text-velmora-gold transition-colors">Shop</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-velmora-text">{product.name}</span>
        </nav>
        
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-velmora-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="product-name text-3xl md:text-4xl mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-text-light">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-serif mb-6">${product.price}</p>
            </div>
            
            <p className="text-velmora-text-light leading-relaxed">{product.description}</p>
            
            {/* Material Selector */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Material</label>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border transition-all ${
                      selectedMaterial === material
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-white'
                        : 'border-velmora-text-light hover:border-velmora-gold'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-text-light hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-text-light hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-6 h-6 text-velmora-gold mx-auto mb-2" />
                <p className="text-xs text-velmora-text-light">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 text-velmora-gold mx-auto mb-2" />
                <p className="text-xs text-velmora-text-light">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-velmora-gold mx-auto mb-2" />
                <p className="text-xs text-velmora-text-light">Hypoallergenic</p>
              </div>
            </div>
            
            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              {[
                { id: 'description', title: 'Description', content: product.description },
                { id: 'materials', title: 'Materials & Care', content: '18K gold plated over brass. Nickel-free and hypoallergenic. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on orders over $50. Express shipping available at checkout. 30-day hassle-free returns. See our return policy for details.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="flex items-center justify-between w-full text-left font-medium"
                  >
                    <span>{section.title}</span>
                    <Plus className={`w-5 h-5 transition-transform ${
                      expandedAccordion === section.id ? 'rotate-45' : ''
                    }`} />
                  </button>
                  {expandedAccordion === section.id && (
                    <p className="mt-4 text-sm text-velmora-text-light leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-200 pt-16">
            <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-velmora-cream overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-2">{product.name}</h3>
                  <p className="font-medium">${product.price}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
