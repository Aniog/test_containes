import { useState } from 'react';
import './App.css';
import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import ContactForm from './components/landing/ContactForm';
import ContactsDrawer from './components/landing/ContactsDrawer';
import Footer from './components/landing/Footer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onViewContacts={() => setDrawerOpen(true)} />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ContactForm />
      </main>
      <Footer />
      <ContactsDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

export default App;
