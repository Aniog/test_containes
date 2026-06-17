import React, { useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Search, Filter, Warehouse } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState('All');
  const containerRef = useRef(null);

  const categories = ['All', 'Double Folding Machine', 'Sheet Metal Folder', 'Manual Folder', 'Hydraulic Folder'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let query = client.from('IndustrialProduct').select('*');
        if (filter !== 'All') {
          // Note: In DataClient, filters might be structured differently if nested in 'data'
          // but typically we can use eq() if indexed or through custom query patterns.
          // For simplicity in this demo, we'll fetch all and filter in JS if needed, 
          // but better to check if .eq('data->category', filter) works.
          // Since schema shows category inside a top level object, we fetch all.
        }
        const { data: response } = await query;
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [filter]);

  useEffect(() => {
    if (products.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.data.category === filter);

  return (
    <div className="pb-24 pt-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Badge className="mb-4 bg-slate-200 text-slate-700 hover:bg-slate-200 border-none">Machinery Portfolio</Badge>
          <h1 id="products-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 uppercase">
            Precision <span className="text-blue-800">Inventory</span>
          </h1>
          <p className="max-w-2xl text-slate-600 leading-relaxed">
            Discover our comprehensive range of high-performance folding solutions, from manual workshop tools to fully automated double-folding industrial lines.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white p-2 rounded-xl border border-slate-100 shadow-sm inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-800 text-white shadow-md shadow-blue-900/10'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const { data: fields } = product;
              return (
                <Card key={product.id} className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group bg-white">
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    <img
                      data-strk-img-id={`prod-img-list-${product.id}`}
                      data-strk-img={`[prod-title-list-${product.id}] [prod-desc-list-${product.id}] [products-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={fields.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-800 text-white border-none shadow-sm">{fields.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle id={`prod-title-list-${product.id}`} className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter mb-2 group-hover:text-blue-800 transition-colors">
                      {fields.name}
                    </CardTitle>
                    <p id={`prod-desc-list-${product.id}`} className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {fields.description}
                    </p>
                  </CardHeader>
                  <CardContent className="px-6 py-0 flex-grow">
                    <div className="space-y-3 pb-6 border-t border-slate-50 pt-4 mt-2">
                       {fields.specifications && Object.entries(fields.specifications).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center bg-slate-50 p-2 rounded-lg text-xs">
                          <span className="text-slate-500 font-semibold uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-slate-900 font-bold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 border-t border-slate-50 bg-slate-50/30">
                    <Button variant="default" className="w-full h-12 rounded-lg bg-slate-900 hover:bg-blue-800 font-bold transition-all" asChild>
                       <Link to="/contact" state={{ product: fields.name }}>Request Expert Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <Warehouse className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400">No products found in this category</h3>
            <Button variant="link" onClick={() => setFilter('All')} className="text-blue-700">Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
