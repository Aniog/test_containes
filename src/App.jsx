import React from 'react';
import TopBar from './components/layout/TopBar';
import Breadcrumb from './components/layout/Breadcrumb';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import FeaturedGenerators from './components/home/FeaturedGenerators';
import BrowseByCategory from './components/home/BrowseByCategory';
import AllGenerators from './components/home/AllGenerators';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Breadcrumb />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        {/* Sections will go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
