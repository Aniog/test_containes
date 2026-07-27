import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export const Products = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const categories = [
        {
            id: 'electronics',
            name: 'Consumer Electronics',
            desc: 'Smartphones, wearables, smart home devices, and computer accessories.',
            examples: ['Bluetooth earbuds', 'Power banks', 'Smart watches', 'Chargers']
        },
        {
            id: 'home',
            name: 'Home & Garden',
            desc: 'Furniture, decor, kitchenware, and outdoor living products.',
            examples: ['Ergonomic chairs', 'Ceramic cookware', 'Outdoor lighting', 'Pet supplies']
        },
        {
            id: 'apparel',
            name: 'Apparel & Textiles',
            desc: 'Clothing, activewear, bags, and home textiles.',
            examples: ['Yoga pants', 'Backpacks', 'Bedding sets', 'Workwear']
        },
        {
            id: 'machinery',
            name: 'Machinery & Tools',
            desc: 'Industrial equipment, hand tools, and building materials.',
            examples: ['Packaging machines', 'Power tools', 'Hardware components', 'Safety equipment']
        },
        {
            id: 'toys',
            name: 'Toys & Hobbies',
            desc: 'Children\'s toys, educational games, and sporting goods.',
            examples: ['Wooden puzzles', 'Plush toys', 'Fitness equipment', 'Outdoor gear']
        },
        {
            id: 'promotional',
            name: 'Promotional Items',
            desc: 'Custom corporate gifts and branded merchandise.',
            examples: ['Custom tumblers', 'Branded stationery', 'Lanyards', 'Tote bags']
        }
    ];

    return (
        <div className="w-full bg-white pb-20" ref={containerRef}>
            <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" id="products-title">Products We Source</h1>
                    <p className="text-xl text-gray-600" id="products-desc">With our extensive network in China, we can find reliable manufacturers for almost any legal commercial product.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-100">
                            <CardContent className="p-0">
                                <img 
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt={category.name}
                                    className="w-full h-48 object-cover"
                                    data-strk-img-id={`cat-img-${category.id}`}
                                    data-strk-img={`[cat-name-${category.id}]`}
                                    data-strk-img-ratio="16x9"
                                    data-strk-img-width="600"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2" id={`cat-name-${category.id}`}>{category.name}</h3>
                                    <p className="text-gray-600 mb-4 h-12" id={`cat-desc-${category.id}`}>{category.desc}</p>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-900 mb-2">Common examples:</p>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside pl-4">
                                            {category.examples.map((ex, i) => (
                                                <li key={i}>{ex}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see your product category?</h3>
                    <p className="text-gray-600 mb-6">These are just our most common categories. Our sourcing team can find suppliers for thousands of other items.</p>
                    <Link to="/contact" className="text-blue-600 font-bold hover:text-blue-700 underline">Send us your product requirements →</Link>
                </div>
            </div>
        </div>
    );
};