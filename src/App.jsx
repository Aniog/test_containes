import Layout from './components/Layout';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

// ARTITECT MACHINERY - Sheet Metal Folding Machines Website

function App() {
  return (
    <Layout>
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
