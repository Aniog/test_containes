import React, { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { Search, Filter, Info, ChevronRight, CheckCircle2 } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import strkImgConfig from '@/strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .order('id', { ascending: false });

        if (error) throw error;
        setProducts(response?.data?.list || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const categories = ['All', ...new Set(products.map(p => p.data.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.data.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.data.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) return (
    <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
    </div>
  );

  return (
    <div className="py-12" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our range of precision double folding machines and sheet metal folders. Engineered for excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] industrial folding machine`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.data.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-blue-900 backdrop-blur-sm border-none">
                  {product.data.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle id={`product-title-${product.id}`} className="text-xl text-gray-900">{product.data.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.data.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-1">
                    {product.data.features?.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 text-orange-500 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{product.data.name}</DialogTitle>
                      <DialogDescription className="text-base mt-2">
                        {product.data.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 underline decoration-orange-500 underline-offset-4">Full Features</h4>
                        <ul className="space-y-2">
                          {product.data.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 underline decoration-orange-500 underline-offset-4">Technical Specifications</h4>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          {Object.entries(product.data.specifications || {}).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-gray-200 pb-1 last:border-0 last:pb-0">
                              <span className="text-xs font-medium text-gray-500 uppercase">{key.replace(/_/g, ' ')}</span>
                              <span className="text-sm font-semibold text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button asChild className="bg-blue-900 hover:bg-blue-700">
                        <Link to="/contact">Request Special Quote</Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl py-20 text-center border border-dashed">
            <Info className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filters.</p>
            <Button variant="link" className="text-blue-900 mt-4" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// No longer needed: Helper component for Icon

export default Products;
