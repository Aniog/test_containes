import React from 'react';
import { Sparkles, Microscope, Search, Atom, Brain, Eye } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useEffect, useRef } from 'react';

const MicroCosmos = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen" ref={containerRef}>
            {/* Header/Nav */}
            <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
               <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Microscope className="w-8 h-8 text-cyan-400" />
                        <span className="text-2xl font-bold tracking-wider text-cyan-50">MicroCosmos</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
                        <a href="#discoveries" className="hover:text-cyan-400 transition-colors">Discoveries</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </nav>
               </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center bg-slate-800 text-white overflow-hidden">
                 <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
                    data-strk-bg-id="hero-bg-microcosmos"
                    data-strk-bg="[hero-subtitle] [hero-title]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1920"
                />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold mb-4 text-cyan-300 drop-shadow-lg">
                        The Invisible World
                    </h1>
                    <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light text-slate-200">
                        Journey into the hidden universe that exists right beneath our noses. Discover the beauty of the microscopic realm.
                    </p>
                    <a href="#gallery" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center space-x-2 shadow-lg shadow-cyan-500/30">
                        <Search className="w-5 h-5" />
                        <span>Start Exploring</span>
                    </a>
                </div>
            </section>

            {/* Introduction Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                             <img
                                alt="Microscope view"
                                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                                data-strk-img-id="about-microscope-img"
                                data-strk-img="[about-title] [about-desc]"
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="800"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 id="about-title" className="text-4xl font-bold mb-6 text-slate-800">What is the MicroCosmos?</h2>
                            <p id="about-desc" className="text-lg text-slate-600 leading-relaxed mb-6">
                                The MicroCosmos isn't some distant galaxy; it's the world of the extremely small. It's a place where tiny organisms, intricate structures, and bizarre life forms thrive. Through the lens of powerful microscopes, we can unveil the mesmerizing details of cells, bacteria, and complex chemical formations that are invisible to the naked eye.
                            </p>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-center space-x-3">
                                    <Sparkles className="w-6 h-6 text-cyan-500" />
                                    <span>Hidden beauty in everyday objects.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Atom className="w-6 h-6 text-cyan-500" />
                                    <span>The building blocks of life itself.</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Brain className="w-6 h-6 text-cyan-500" />
                                    <span>New frontiers for scientific understanding.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 id="gallery-title" className="text-4xl font-bold mb-4 text-slate-800">Microscopic Gallery</h2>
                        <p id="gallery-subtitle" className="text-slate-600 max-w-2xl mx-auto text-lg">A curated collection of stunning images captured from the tiny world around us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Gallery Item 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Cell structure"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-1"
                                    data-strk-img="[g1-title] [g1-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g1-title" className="text-xl font-bold mb-2 text-slate-800">Plant Cell Architecture</h3>
                                <p id="g1-desc" className="text-sm text-slate-500">The intricate, rigid walls of plant cells under high magnification, revealing their honeycomb-like structure.</p>
                            </div>
                        </div>

                        {/* Gallery Item 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Crystals"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-2"
                                    data-strk-img="[g2-title] [g2-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g2-title" className="text-xl font-bold mb-2 text-slate-800">Crystal Formations</h3>
                                <p id="g2-desc" className="text-sm text-slate-500">Polarized light reveals the mesmerizing, stained-glass colors of vitamin C crystals forming.</p>
                            </div>
                        </div>

                        {/* Gallery Item 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Microorganisms"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-3"
                                    data-strk-img="[g3-title] [g3-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g3-title" className="text-xl font-bold mb-2 text-slate-800">Pond Water Life</h3>
                                <p id="g3-desc" className="text-sm text-slate-500">A single drop of pond water teeming with active diatoms and single-celled organisms darting about.</p>
                            </div>
                        </div>
                        
                         {/* Gallery Item 4 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Insect wing"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-4"
                                    data-strk-img="[g4-title] [g4-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g4-title" className="text-xl font-bold mb-2 text-slate-800">Butterfly Wing Scales</h3>
                                <p id="g4-desc" className="text-sm text-slate-500">The intricate, overlapping scales on a butterfly wing that create their vivid, iridescent colors.</p>
                            </div>
                        </div>

                         {/* Gallery Item 5 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Blood cells"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-5"
                                    data-strk-img="[g5-title] [g5-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g5-title" className="text-xl font-bold mb-2 text-slate-800">Red Blood Cells</h3>
                                <p id="g5-desc" className="text-sm text-slate-500">A close up view of human red blood cells, showing their characteristic biconcave disc shape.</p>
                            </div>
                        </div>

                         {/* Gallery Item 6 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    alt="Snowflake"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-strk-img-id="gallery-img-6"
                                    data-strk-img="[g6-title] [g6-desc]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                     <Eye className="text-white w-8 h-8 opacity-75" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 id="g6-title" className="text-xl font-bold mb-2 text-slate-800">Snowflake Geometry</h3>
                                <p id="g6-desc" className="text-sm text-slate-500">The perfectly symmetrical, crystalline structure of a single snowflake before it melts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Discoveries Section */}
            <section id="discoveries" className="py-20 bg-slate-900 text-white border-t border-slate-800 flex flex-col items-center justify-center">
                 <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 id="discoveries-title" className="text-4xl font-bold mb-8 text-cyan-300">Why It Matters</h2>
                        <p id="discoveries-subtitle" className="text-xl text-slate-300 font-light mb-12">
                            Exploring the microcosm isn't just about pretty pictures. It's fundamental to our understanding of the universe.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <Microscope className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Medicine & Health</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">By observing bacteria, viruses, and our own cells, we develop life-saving vaccines, antibiotics, and treatments for diseases that were once incurable.</p>
                            </div>
                             <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <Sparkles className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Materials Science</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Understanding atomic structures allows us to create stronger, lighter, and more durable materials for use in everything from aerospace to electronics.</p>
                            </div>
                        </div>
                 </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-slate-950 py-12 text-slate-400">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-6 flex justify-center items-center space-x-2">
                        <Microscope className="w-6 h-6 text-cyan-600" />
                        <span className="text-xl font-bold text-slate-200">MicroCosmos</span>
                    </div>
                    <p className="mb-6 text-sm max-w-md mx-auto">Dedicated to unveiling the beauty and complexity of the invisible world that surrounds us every day.</p>
                    <div className="flex justify-center space-x-6 text-sm mb-8">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
                    </div>
                    <p className="text-xs">&copy; 2026 MicroCosmos Explorers. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MicroCosmos;