import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'electro', title: 'Electronics', query: 'gadgets electronics factory' },
  { id: 'furniture', title: 'Furniture', query: 'modern office furniture' },
  { id: 'industrial', title: 'Industrial', query: 'factory machinery' },
  { id: 'baby', title: 'Baby & Toys', query: 'wooden toys' },
];

const HomeProductsBrief = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Extensive Reach</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source</h3>
             <p className="text-slate-600 text-lg">From consumer goods to industrial components, we have the network to find what you need.</p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link to="/products">View All Categories</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-100">
               <img 
                data-strk-img-id={`home-prod-${cat.id}`}
                data-strk-img={`[home-prod-title-${cat.id}] ${cat.query}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <h4 id={`home-prod-title-${cat.id}`} className="text-white font-bold text-xl">{cat.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsBrief;
