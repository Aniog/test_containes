import React, { useEffect } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Breadcrumb from "./components/Breadcrumb";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import AllGenerators from "./components/AllGenerators";
import HowItWorks from "./components/HowItWorks";
import WhyStrikingly from "./components/WhyStrikingly";
import Faq from "./components/Faq";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";

function App() {
  // Mark <html> as JS-ready so the progressive "Show all" collapse can engage.
  // Without this class, every card stays visible (no-JS fallback).
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <Featured />
        <Categories />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

export default App;