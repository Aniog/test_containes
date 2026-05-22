import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import FeaturedArticle from './components/home/FeaturedArticle';
import Categories from './components/home/Categories';
import ArticleGrid from './components/home/ArticleGrid';
import Newsletter from './components/home/Newsletter';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <FeaturedArticle />
      <Categories />
      <ArticleGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
