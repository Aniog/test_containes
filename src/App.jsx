import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryDetail from './pages/MemoryDetail';
import Submit from './pages/Submit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-space-black flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/memory/:id" element={<MemoryDetail />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-space-black pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="inline-flex items-center gap-2 text-cosmic-blue text-xs font-mono uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-cosmic-blue/50" />
          About the Initiative
        </div>
        <h1 className="font-space text-4xl md:text-5xl font-bold text-star-white mb-6 leading-tight">
          Why We Archive
        </h1>
        <div className="space-y-6 text-star-dim text-base leading-relaxed font-body">
          <p>
            In 2051, the Interstellar Migration Initiative was founded with a single purpose: to ensure that when humanity leaves Earth, it takes everything that makes us human.
          </p>
          <p>
            The colony ships can carry technology, seeds, and genetic archives. But they cannot carry the smell of rain on hot pavement, or the sound of a grandmother's voice, or the particular quality of light on a winter afternoon in a city that no longer exists.
          </p>
          <p>
            The Memory Archive was created to carry those things. We collect first-person accounts of human experience — from the ancient world to the present day — and preserve them in a format that will survive the journey between stars.
          </p>
          <p>
            We believe that a civilization without memory is not a civilization at all. We believe that every human life, no matter how ordinary it seemed, contains something irreplaceable. We believe that the stories we tell about ourselves are as important as the genes we carry.
          </p>
          <p className="text-star-white font-medium">
            We are carrying humanity's story to the stars. We hope you will help us tell it.
          </p>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-space-black flex items-center justify-center pt-20 px-4">
      <div className="text-center">
        <div className="text-6xl mb-4 opacity-20 font-mono text-star-dim">404</div>
        <h2 className="font-space text-2xl font-bold text-star-white mb-2">Page Not Found</h2>
        <p className="text-star-dim mb-6">This corner of the archive doesn't exist.</p>
        <a href="/" className="bg-cosmic-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-cosmic-blue/90 transition-colors inline-block">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;


