import Navigation from "./components/site/Navigation";
import Footer from "./components/site/Footer";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Capabilities from "./components/sections/Capabilities";
import Engineering from "./components/sections/Engineering";
import Process from "./components/sections/Process";
import Specs from "./components/sections/Specs";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <Engineering />
        <Process />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}