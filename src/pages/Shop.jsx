import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Vivid Aura Jewels", desc: "Gold ear cuff with crystal accent", price: 42, category: "Earrings" },
  { id: 2, name: "Majestic Flora Nectar", desc: "Multicolor floral crystal necklace", price: 68, category: "Necklaces" },
  { id: 3, name: "Golden Sphere Huggies", desc: "Chunky gold dome huggie earrings", price: 38, category: "Huggies" },
  { id: 4, name: "Amber Lace Earrings", desc: "Textured gold filigree drop earrings", price: 54, category: "Earrings" },
  { id: 5, name: "Royal Heirloom Set", desc: "Gift-boxed earring + necklace set", price: 95, category: "Sets" }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl mb-12 text-center">Shop All</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Category</h3>
            <div className="space-y-2 mb-8">
              {["All", "Earrings", "Necklaces", "Huggies", "Sets"].map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            <h3 className="font-medium mb-4">Price</h3>
            <div className="space-y-2">
              {["Under $50", "$50-$75", "$75+"].map(range => (
                <label key={range} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-gray-600">{products.length} products</p>
              <select className="text-sm border px-4 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="bg-gray-100 aspect-square mb-4"></div>
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
                  <p className="font-medium">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
