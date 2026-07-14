import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, MapPin, Star, Heart, Menu, X, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" ref={containerRef}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">VistaLux</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Experiences</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Concierge</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-md active:scale-95">
                Book Stays
              </button>
            </div>
            
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-subtitle] [hero-title] luxury travel aerial view"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Discover Earth's Most <span className="text-blue-400">Extraordinary</span> Escapes
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Curated ultra-luxury travel experiences for the discerning explorer seeking the sublime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
              Explore Destinations
            </button>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Experience
            </button>
          </div>
        </div>
        
        {/* Search Bar Floating */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 hidden md:block">
          <div className="bg-white p-2 rounded-2xl shadow-2xl flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 border-r border-slate-100">
              <Search className="w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Where to next?" className="bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 w-full py-3" />
            </div>
            <div className="flex-1 px-4 border-r border-slate-100 text-left">
              <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Date Range</span>
              <span className="text-sm font-semibold">July 20 - July 30</span>
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Featured Destinations */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 id="section-title-dest" className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Handpicked Collections</h2>
            <p id="section-subtitle-dest" className="text-lg text-slate-600">From the crystal clear waters of the Maldives to the rugged peaks of the Swiss Alps.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            See All Destinations <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: '1', name: 'Amalfi Coast', country: 'Italy', price: '$4,200', rating: 4.9 },
            { id: '2', name: 'Bora Bora', country: 'French Polynesia', price: '$6,500', rating: 5.0 },
            { id: '3', name: 'Kyoto Zen', country: 'Japan', price: '$3,800', rating: 4.8 }
          ].map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-start text-left">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img 
                  data-strk-img-id={`dest-img-${item.id}`}
                  data-strk-img={`[dest-name-${item.id}] [dest-country-${item.id}] luxury hotel view [section-title-dest]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl">
                  <span className="text-slate-900 font-bold">{item.price}</span>
                  <span className="text-slate-500 text-xs">/night</span>
                </div>
              </div>
              <div className="p-8 w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 id={`dest-name-${item.id}`} className="text-2xl font-bold text-slate-900 leading-none">{item.name}</h3>
                    <p id={`dest-country-${item.id}`} className="text-slate-500 font-medium mt-1">{item.country}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {item.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-slate-900 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div 
              className="rounded-3xl aspect-[4/3] overflow-hidden relative z-10 shadow-2xl"
              data-strk-bg-id="exp-bg-v1"
              data-strk-bg="private jet luxury travel experience interior"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-50 z-0 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20 z-0" />
            
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl hidden sm:block z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="text-blue-600 fill-current" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Platinum Member</p>
                  <p className="text-slate-500 text-xs text-left">"Transformed how I see the world."</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">World-Class Service</span>
            <h2 id="exp-title" className="text-5xl font-bold mb-8 leading-tight tracking-tight">Luxury Beyond The <span className="italic text-slate-400 font-light">Ordinary</span></h2>
            <div className="space-y-8">
              {[
                { title: 'Curated Itineraries', text: 'Surgical precision in planning your every movement, tailored exactly to your lifestyle.' },
                { title: 'Global Concierge 24/7', text: 'Our experts are available around the clock to handle any request, anywhere on Earth.' },
                { title: 'Exclusive Access', text: 'Unlock doors that are closed to the public, from private museums to secret estates.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center font-bold text-blue-400">
                    0{i+1}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">VistaLux</span>
              </div>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Elevating travel from simple visitation to profound transformation. Find your edge.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-bold mb-6 text-slate-900">Company</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press Office</a></li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="font-bold mb-6 text-slate-900">Support</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Travel Advisory</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Safety Protocols</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="font-bold mb-6 text-slate-900">Newsletter</h4>
              <p className="text-slate-500 mb-4 text-sm">Get seasonal inspiration delivered directly to your inbox.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-100 border-none outline-none px-4 py-2 rounded-lg w-full text-slate-900" />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
            <p>© 2026 VistaLux Luxury Travel. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Terms of Service</span>
              <span>Cookie Declaration</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
