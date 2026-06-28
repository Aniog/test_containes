import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Maximize, Gauge } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const products = [
        {
            id: 'foldmaster-pro',
            name: 'FoldMaster Pro',
            subtitle: 'The flagship double folding machine',
            desc: 'Our most popular model. The FoldMaster Pro double folder is designed for high-volume, continuous operation. It features automatic tool changing and exceptional precision for complex sheet metal profiles.',
            specs: {
                length: '3200 mm (10 ft)',
                capacity: '3.0 mm Mild Steel',
                control: '21" Touch-Screen NC'
            }
        },
        {
            id: 'foldmaster-eco',
            name: 'FoldMaster Eco',
            subtitle: 'Efficient sheet metal folder',
            desc: 'A versatile sheet metal folding machine perfect for architectural trim and roofing components. Offers the dual-action bending capability in a more compact, cost-effective footprint.',
            specs: {
                length: '2500 mm (8 ft)',
                capacity: '2.0 mm Mild Steel',
                control: '15" Touch-Screen NC'
            }
        },
        {
            id: 'foldmaster-multi',
            name: 'FoldMaster Multi',
            subtitle: 'Heavy-duty metal folder',
            desc: 'Built for the toughest jobs. This metal folding machine includes segmented upper and lower tooling to easily handle boxes, pans, and intricate facade panels.',
            specs: {
                length: '4000 mm (13 ft)',
                capacity: '4.0 mm Mild Steel',
                control: '21" Touch-Screen NC + 3D Simulation'
            }
        }
    ];

    return (
        <div ref={containerRef} className="animate-in fade-in duration-500 pb-20">
            {/* Header */}
            <div className="bg-slate-100 py-16 border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">Our Machinery</h1>
                    <p id="products-subtitle" className="text-xl text-gray-600 leading-relaxed">
                        Precision-engineered double folding machines designed to revolutionized your sheet metal fabrication process. Explore our range below.
                    </p>
                </div>
            </div>

            {/* Products List */}
            <div className="container mx-auto px-4 mt-20">
                <div className="space-y-24">
                    {products.map((product, index) => (
                        <div key={product.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute inset-0 bg-blue-900/5 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                                <img
                                    className="rounded-2xl shadow-lg border border-gray-100 w-full object-cover aspect-[4/3] group-hover:shadow-xl transition-shadow"
                                    alt={product.name}
                                    data-strk-img-id={`product-${product.id}-img`}
                                    data-strk-img={`[product-${product.id}-name] [product-${product.id}-subtitle] double folding machine industrial clear view`}
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="800"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-sm font-semibold rounded-full mb-4 self-start border border-blue-100">
                                    Double Folder
                                </div>
                                <h2 id={`product-${product.id}-name`} className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                                <h3 id={`product-${product.id}-subtitle`} className="text-lg text-gray-500 mb-6 font-medium italic">{product.subtitle}</h3>
                                
                                <p id={`product-${product.id}-desc`} className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    {product.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pt-6 border-t border-gray-100">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-blue-900 font-semibold mb-1">
                                            <Maximize size={18} className="text-orange-500" /> Bending Length
                                        </div>
                                        <div className="text-gray-700 text-sm">{product.specs.length}</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-blue-900 font-semibold mb-1">
                                            <Gauge size={18} className="text-orange-500" /> Max Capacity
                                        </div>
                                        <div className="text-gray-700 text-sm">{product.specs.capacity}</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-blue-900 font-semibold mb-1">
                                            <Settings size={18} className="text-orange-500" /> Control System
                                        </div>
                                        <div className="text-gray-700 text-sm">{product.specs.control}</div>
                                    </div>
                                </div>

                                <Link to="/contact" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors self-start group">
                                    Request Quote for {product.name} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-4 mt-32 text-center max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Not sure which metal folder is right for you?</h3>
                <p className="text-gray-600 mb-8">Our engineering team can help you select or customize a machine based on your specific material and profile requirements.</p>
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors shadow-md inline-block">
                    Contact Engineering Support
                </Link>
            </div>
        </div>
    );
};

export default Products;