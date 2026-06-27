import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Hero from './components/Hero';
import FeaturedGenerators from './components/generators/FeaturedGenerators';
import BrowseByCategory from './components/generators/BrowseByCategory';
import AllGenerators from './components/generators/AllGenerators';
import HowItWorks from './components/HowItWorks';
import WhyStrikingly from './components/WhyStrikingly';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import './App.css';

const GeneratorsHub = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Breadcrumb />
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Redirect root to /generators for easy preview */}
        <Route path="/" element={<Navigate to="/generators" replace />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
