import Layout from './Layout.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Layout>
      <Hero />
      <Products />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
