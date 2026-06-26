import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
    {
        id: "double-folder-pro",
        title: "Pro Series Double Folder",
        description: "High-speed precision double folding for standard commercial profiles. Efficient and reliable.",
        imgId: "prod-1-img",
        titleId: "prod-1-title",
        descId: "prod-1-desc"
    },
    {
        id: "sheet-metal-max",
        title: "Max-Flex Sheet Metal Folder",
        description: "Versatile folding capabilities for complex geometries up to 3mm thickness.",
        imgId: "prod-2-img",
        titleId: "prod-2-title",
        descId: "prod-2-desc"
    },
    {
        id: "heavy-duty-folder",
        title: "Titan Heavy Duty Folder",
        description: "Built for the toughest jobs, handling thick materials with uncompromising accuracy.",
        imgId: "prod-3-img",
        titleId: "prod-3-title",
        descId: "prod-3-desc"
    }
];

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <div ref={containerRef}>
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center pt-16">
                <div 
                    className="absolute inset-0 z-0 bg-neutral-900"
                    data-strk-bg-id="hero-bg"
                    data-strk-bg="[hero-title] [hero-subtitle]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1920"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-0" />
                
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Precision Metal Folding <br className="hidden md:block"/> Engineered for the Future
                    </h1>
                    <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
                        Artitect Machinery delivers state-of-the-art double folding machines and sheet metal folders, combining elegant design with robust industrial performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0">View Products</Button>
                        <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md">Contact Sales</Button>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-20 bg-white" id="about">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Why Choose Artitect?</h2>
                        <p className="text-neutral-600">Our machinery is designed to increase your production efficiency while maintaining the highest standards of accuracy.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">High-Speed Operation</h3>
                            <p className="text-neutral-600 text-sm">Significantly reduce cycle times with our optimized dual-action folding systems.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Unmatched Precision</h3>
                            <p className="text-neutral-600 text-sm">Advanced control systems ensure perfect bends every time, minimizing material waste.</p>
                        </div>
                         <div className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                            <p className="text-neutral-600 text-sm">Intuitive touchscreen controls make complex folding operations simple for operators of all levels.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-neutral-50" id="products">
                <div className="container mx-auto px-4">
                     <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 id="products-heading" className="text-3xl font-bold text-neutral-900 mb-2">Our Flagship Machines</h2>
                            <p className="text-neutral-600">Discover the perfect folder for your manufacturing needs.</p>
                        </div>
                        <Button variant="link" className="hidden md:flex text-blue-600">View Full Catalog &rarr;</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} className="overflow-hidden border-neutral-200">
                                <div className="aspect-[4/3] relative bg-neutral-100">
                                    <img
                                        alt={product.title}
                                        data-strk-img-id={product.imgId}
                                        data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
                                        data-strk-img-ratio="4x3"
                                        data-strk-img-width="600"
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 id={product.titleId} className="text-xl font-bold mb-2 text-neutral-900">{product.title}</h3>
                                    <p id={product.descId} className="text-neutral-600 text-sm mb-4">
                                        {product.description}
                                    </p>
                                    <Button variant="outline" className="w-full">Technical Specs</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white text-center" id="contact">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to upgrade your production line?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                        Contact our sales team today for a custom quote or to arrange a demonstration of our double folding machines.
                    </p>
                    <div className="max-w-md mx-auto flex flex-col gap-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-neutral-50 w-full p-6 text-lg rounded-md">Get a Custom Quote</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;