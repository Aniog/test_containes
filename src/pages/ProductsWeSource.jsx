import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductsWeSource = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const categories = [
        {
            id: 'electronics',
            title: 'Consumer Electronics',
            desc: 'Smartphones, wearables, audio devices, cables, chargers, and smart home appliances.',
            imgQuery: '[cat-electronics-desc]'
        },
        {
            id: 'home',
            title: 'Home & Garden',
            desc: 'Indoor/outdoor furniture, kitchenware, home decor, bedding, and landscaping tools.',
            imgQuery: '[cat-home-desc]'
        },
        {
            id: 'industrial',
            title: 'Industrial & Machinery',
            desc: 'Manufacturing equipment, CNC parts, raw materials, construction tools, and safety gear.',
            imgQuery: '[cat-industrial-desc]'
        },
        {
            id: 'apparel',
            title: 'Apparel & Textiles',
            desc: 'Clothing, footwear, fabrics, sportswear, uniforms, and customized fashion accessories.',
            imgQuery: '[cat-apparel-desc]'
        },
        {
            id: 'toys',
            title: 'Toys & Hobbies',
            desc: 'Educational toys, plush items, games, hobby electronics, and outdoor recreational gear.',
            imgQuery: '[cat-toys-desc]'
        },
        {
            id: 'packaging',
            title: 'Packaging & Printing',
            desc: 'Custom boxes, eco-friendly packaging, labels, bags, and commercial printing services.',
            imgQuery: '[cat-packaging-desc]'
        }
    ];

    return (
        <div ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Products We Source</h1>
                    <p className="text-xl text-slate-600">
                        Based in the manufacturing capital of the world, we have access to tens of thousands of verified factories across every major industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div key={cat.id} className="group rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white flex flex-col">
                            <div className="aspect-w-16 aspect-h-9 bg-slate-100 relative overflow-hidden">
                                <img
                                    data-strk-img-id={`prod-we-source-${cat.id}`}
                                    data-strk-img={cat.imgQuery}
                                    data-strk-img-ratio="16x9"
                                    data-strk-img-width="600"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt={cat.title}
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                                <p id={`cat-${cat.id}-desc`} className="text-slate-600 mb-6 flex-grow">{cat.desc}</p>
                                <Link to="/contact" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 w-fit">
                                    Source this category <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Looking for something specific?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Even if your product category isn't listed above, chances are we can source it. We specialize in finding niche and custom manufacturing partners.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                        Tell us what you need
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsWeSource;